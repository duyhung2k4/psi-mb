import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import dayjs from "dayjs";
import AlertCustom from "../../../components/Alert";
import ButtonCustom from "../../../components/Button";


import { styles } from "./styled";
import BackgroundAuth from "../background";
import { Text } from "@rneui/base";
import { View } from "react-native";
import { useSendCodeRegisterMutation, useSendInfoRegisterMutation } from "../../../redux/query/api/auth";
import { TemporaryInfo } from "../../../model/temporaryInfo";
import { AcceptCodeRegisterProps } from "../../../routers/utils";

import {
  CodeField,
  Cursor,
  useClearByFocusCell,
  useBlurOnFulfill,
} from "react-native-confirmation-code-field";

const AcceptCodeRegister: React.FC<AcceptCodeRegisterProps> = ({ navigation, route }) => {
  const [code, setCode] = useState("");
  const [time, setTime] = useState<number | null>(null);
  const [alert, setAlert] = useState<{
    type: "success" | "error" | "warning",
    message: string,
    show: boolean,
  }>({ type: "success", message: "", show: false })

  const [ post, { isLoading } ] = useSendCodeRegisterMutation();
  const [ postRepeatCode, { isLoading: isLoadingRepeatCode } ] = useSendInfoRegisterMutation();

  const ref = useBlurOnFulfill({ value: code, cellCount: 6 });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value: code,
    setValue: setCode,
  });

  const getTimeSaveId = async () => {
    const data = await AsyncStorage.getItem("id");
    if (data === null) {
      setTime(0);
      return;
    }
    
    const convert = JSON.parse(data) as TemporaryInfo;

    const time = dayjs(convert.exp).diff(dayjs(), "s");
    setTime(time);
  }

  const removeId = async () => {
    const _ = await AsyncStorage.removeItem("id");
    navigation.navigate("Register");
  }

  const sendCode = async () => {
    const data = await AsyncStorage.getItem("id");
    if(data === null) {
      setAlert({
        type: "error",
        message: "Mã đăng nhập hết hạn",
        show: true,
      });
      return;
    }
    const convert = JSON.parse(data) as TemporaryInfo;
    const result = await post({ idTemporaryCredential: convert.id, code });

    if("data" in result) {
      setAlert({
        type: "success",
        message: "Đăng kí tài khoản thành công",
        show: true,
      })
    } else {
      setAlert({
        type: "error",
        message: "Mã đăng nhập không đúng",
        show: true,
      })
    }
  }

  const repeatCode = async () => {
    const data = await AsyncStorage.getItem("id");
    if(data === null) {
      setAlert({
        type: "error",
        message: "Mã đăng nhập hết hạn",
        show: true,
      });
      return;
    }
    const convert = JSON.parse(data) as TemporaryInfo;
    const result = await postRepeatCode({ 
      username: convert.username,
      password: convert.password,
      email: convert.email,
    });

    if("data" in result) {
      if (result.data.data === undefined) return;

      const exp = dayjs(result.data.data.timeEnd).toString();
      const expLocal = dayjs(result.data.data.timeEnd).add(60, "s").toString();

      const _ = await AsyncStorage.setItem(
        "id",
        JSON.stringify({
          id: result.data.data?.id || 0,
          email: convert.email,
          username: convert.username,
          password: convert.password,
          exp,
          expLocal,
        }),
      );

      getTimeSaveId();
    } else {
      setAlert({
        type: "error",
        message: "Gửi lại mã thất bại",
        show: true,
      })
    }
  }
  
  useEffect(() => {
    getTimeSaveId();
  }, []);

  useEffect(() => {
    if (time === null) return;
    if (time < 0) return;

    const countTime = setInterval(() => {
      getTimeSaveId();
    }, 1000);

    return () => {
      clearInterval(countTime);
    }
  }, [time]);

  return (
    <BackgroundAuth
      title="Nhập mã xác nhận"
    >
      <View style={{ width: "100%", alignItems: "center" }}>

        {
          time !== null && time <= 0 ?
            <Text style={{ fontSize: 20, color: "red" }}>Mã xác nhận đã hết hạn</Text>
            :
            <View style={{ width: "100%", alignItems: "center" }}>
              <Text style={{ fontSize: 20 }}>Mã xác nhận hết hạn sau</Text>
              <Text style={{ fontSize: 16 }}>({time === null ? 0 : (time > 0 ? time : 0)}) giây</Text>
            </View>
        }

        {
          (time !== null && time > 0) &&
          <CodeField
            ref={ref}
            {...props}
            value={code}
            onChangeText={setCode}
            cellCount={6}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            rootStyle={styles.codeFieldRoot}
            renderCell={({ index, symbol, isFocused }) => (
              <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          />
        }

        {
          time !== null && time <= 0 ?
            <View
              style={{
                flexDirection: "row",
                alignContent: "space-between",
                marginTop: 100,
              }}
            >
              <View style={{ flex: 5, marginRight: 10, }}>
                <ButtonCustom
                  title={"Hủy"}
                  color={"error"}
                  disabled={isLoadingRepeatCode}
                  onPress={() => removeId()}
                />
              </View>
              <View style={{ flex: 5, marginLeft: 10, }}>
                <ButtonCustom
                  onPress={() => repeatCode()}
                  loading={isLoadingRepeatCode}
                  title={"Gửi lại mã"}
                />
              </View>
            </View>
            :
            <View
              style={{
                flexDirection: "row",
                alignContent: "space-between",
                marginTop: 100,
              }}
            >
              <View style={{ flex: 5, marginRight: 10, }}>
                <ButtonCustom
                  title={"Hủy"}
                  color={"error"}
                  disabled={isLoading}
                  onPress={() => removeId()}
                />
              </View>
              <View style={{ flex: 5, marginRight: 10, }}>
                <ButtonCustom
                  title={"Xác nhận"}
                  disabled={code.length === 6 ? false : true}
                  loading={isLoading}
                  onPress={() => sendCode()}
                />
              </View>
            </View>
        }
      </View>

      <AlertCustom
        show={alert.show}
        type={alert.type}
        message={alert.message}
        onClose={() => {
          if(alert.type === "success") {
            navigation.navigate("Login");
          }
          setAlert({ type: "success", message: "", show: false });
        }}
      />
    </BackgroundAuth>
  )
}

export default AcceptCodeRegister;
