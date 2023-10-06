import React, { useEffect, useState } from "react";
import BackgroundAuth from "../background";
import { Text } from "@rneui/base";
import { View } from "react-native";
import ButtonCustom from "../../../components/Button";
import { 
  CodeField, 
  Cursor,
  useClearByFocusCell, 
  useBlurOnFulfill,
} from "react-native-confirmation-code-field";
import { styles } from "./styled";
import AsyncStorage from "@react-native-async-storage/async-storage";
import dayjs from "dayjs";

const AcceptCodeRegister: React.FC = () => {

  const [value, setValue] = useState('');
  const [time, setTime] = useState<number>(0);

  const ref = useBlurOnFulfill({value, cellCount: 6});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const getTimeSaveId = async () => {
    const data = await AsyncStorage.getItem("id");
    if(data === null) return;
    const convert = JSON.parse(data) as { id: number, exp: string };

    const time = dayjs(convert.exp).diff(dayjs(), "s");
    setTime(time);
  }

  useEffect(() => {   
    if(time < 0) return;

    const countTime = setInterval(() => {
      setTime(time - 1);
    }, 1000);

    return () => {
      clearInterval(countTime);
    }
  }, [time]);

  useEffect(() => {
    getTimeSaveId();
  }, [])

  return (
    <BackgroundAuth
      title="Nhập mã xác nhận"
    >
      <View style={{ width: "100%", alignItems: "center" }}>
        <Text style={{ fontSize: 20 }}>Mã xác nhận hết hạn sau</Text>
        <Text style={{ fontSize: 16 }}>({time > 0 ? time : 0}) giây</Text>

        <CodeField
          ref={ref}
          {...props}
          value={value}
          onChangeText={setValue}
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

        <View style={{ width: "100%", marginTop: 100 }}>
          <ButtonCustom
            title={"Xác nhận"}
            disabled={value.length === 6 ? false : true}
          />
        </View>
      </View>
    </BackgroundAuth>
  )
}

export default AcceptCodeRegister;
