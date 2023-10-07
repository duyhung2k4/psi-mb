import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import * as Yub from "yup";
import BackgroundAuth from "../background";
import InputCustom from "../../../components/Input";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ButtonCustom from "../../../components/Button";

import { View } from "react-native";
import { Formik, useFormik } from "formik";
import { SendInfoRegisterPayload } from "../../../payload/auth.payload";
import { useSendInfoRegisterMutation } from "../../../redux/query/api/auth";
import DividerCustom from "../../../components/Divider";
import { useAppNavigate } from "../../../hook/use-app-navigate";
import { SCREEN } from "../../../constants/router";
import AlertCustom from "../../../components/Alert";

interface FormRegister {
  username: string
  email: string
  password: string
  repeatPassword: string
}

const ErrorRegsiter = Yub.object().shape({
  username: Yub.string()
    .min(2, "Tên đăng nhập quá ngắn!")
    .max(50, "Tên đăng nhập quá dài!")
    .required("Yêu cầu điền đầy đủ"),
  email: Yub.string().email("Email không hợp lệ").required("Yêu cầu điền đầy đủ"),
  password: Yub.string().required("Yêu cầu điền đầy đủ"),
  repeatPassword: Yub.string().required("Yêu cầu điền đầy đủ"),
});

const Register: React.FC = () => {
  const [post, { isLoading }] = useSendInfoRegisterMutation();
  const [alert, setAlert] = useState<boolean>(false);

  const navigation = useAppNavigate();

  const initForm: FormRegister = {
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
  }

  const formik = useFormik({
    initialValues: initForm,
    onSubmit: (values) => handlerSubmit(values),
    validationSchema: ErrorRegsiter
  });

  const handlerSubmit = async (values: FormRegister) => {
    const data: SendInfoRegisterPayload = {
      username: values.username,
      password: values.password,
      email: values.email,
    }

    const result = await post(data);

    if ("data" in result) {
      if (result.data.data === undefined) return;

      const exp = dayjs(result.data.data.timeEnd).toString();
      const expLocal = dayjs(result.data.data.timeEnd).add(60, "s").toString();

      const _ = await AsyncStorage.setItem(
        "id",
        JSON.stringify({
          id: result.data.data?.id || 0,
          exp,
          expLocal,
        }),
      )

      navigation.navigate(SCREEN.AUTH.ACCEPT_CODE_REGISTER.INDEX);
    } else {
      setAlert(true);
    }
  }

  const checkExistId = async () => {
    const data = await AsyncStorage.getItem("id");
    if(data === null) return;

    const convert = (data as any) as { id: number, exp: string, expLocal: string };
    if(dayjs(convert.expLocal).isAfter(dayjs())) {
      navigation.navigate(SCREEN.CHECK_AUTH.INDEX);
    } else {
      await AsyncStorage.removeItem("id");
    }
  }

  useEffect(() => {
    checkExistId();
  }, []);

  return (
    <BackgroundAuth
      title="Đăng kí"
    >
      <InputCustom
        placeholder="Tên đăng nhập"
        onChangeText={formik.handleChange("username")}
        onBlur={formik.handleBlur("username")}
        value={formik.values.username}
        errorMessage={formik.errors.username && formik.touched.username ? formik.errors.username : undefined}
      />
      <InputCustom
        placeholder="Email"
        onChangeText={formik.handleChange("email")}
        onBlur={formik.handleBlur("email")}
        value={formik.values.email}
        errorMessage={formik.errors.email && formik.touched.email ? formik.errors.email : undefined}
      />
      <InputCustom
        placeholder="Mật khẩu"
        onChangeText={formik.handleChange("password")}
        onBlur={formik.handleBlur("password")}
        value={formik.values.password}
        errorMessage={formik.errors.password && formik.touched.password ? formik.errors.password : undefined}
        secureTextEntry
      />
      <InputCustom
        placeholder="Nhắc lại mật khẩu"
        onChangeText={formik.handleChange("repeatPassword")}
        onBlur={formik.handleBlur("repeatPassword")}
        value={formik.values.repeatPassword}
        errorMessage={formik.errors.repeatPassword && formik.touched.repeatPassword ? formik.errors.repeatPassword : undefined}
        secureTextEntry
      />
      <View style={{ width: "100%", marginTop: 20 }}>
        <ButtonCustom
          title={"Đăng kí"}
          color={"#00c638"}
          onPress={() => formik.handleSubmit()}
          loading={isLoading}
          disabled={isLoading}
        />
      </View>

      <DividerCustom 
        title="Bạn đã có tài khoản" 
        style={{
          marginTop: 20,
          marginBottom: 20,
        }}
      />

      <View style={{ width: "100%" }}>
        <ButtonCustom
          title={"Đăng nhập"}
          color={"#00c638"}
          onPress={() => navigation.navigate(SCREEN.AUTH.LOGIN.INDEX)}
          disabled={isLoading}
        />
      </View>
      <AlertCustom
        type="error"
        show={alert}
        message="Email hoặc tên đăng nhập đã tồn tại"
        onClose={() => setAlert(false)}
      />
    </BackgroundAuth>
  )
}

export default Register;