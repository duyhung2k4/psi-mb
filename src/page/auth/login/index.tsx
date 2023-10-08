import React, { useState } from "react";
import * as Yub from "yup";
import BackgroundAuth from "../background";
import InputCustom from "../../../components/Input";
import ButtonCustom from "../../../components/Button";
import DividerCustom from "../../../components/Divider";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AlertCustom from "../../../components/Alert";

import { useFormik } from "formik";
import { View } from "react-native";
import { LoginPayload } from "../../../payload/auth.payload";
import { useLoginMutation } from "../../../redux/query/api/auth";
import { LoginProps } from "../../../routers/utils";

const ErrorLogin = Yub.object().shape({
  username: Yub.string()
    .required("Yêu cầu điền đầy đủ"),
  password: Yub.string().required("Yêu cầu điền đầy đủ"),
});

const Login: React.FC<LoginProps> = ({ navigation, route }) => {

  const [alert, setAlert] = useState<boolean>(false);

  const initialValues: LoginPayload = {
    username: "",
    password: "",
  }

  const formik = useFormik({
    initialValues,
    onSubmit: (value) => handlerSubmit(value),
    validationSchema: ErrorLogin,
  });

  const [post, { isLoading }] = useLoginMutation();

  const handlerSubmit = async (values: LoginPayload) => {
    const result = await post(values);

    if ("data" in result) {
      if (result.data.data === undefined) return;
      const accessToken = result.data.data.accessToken;
      const _ = await AsyncStorage.setItem("accessToken", accessToken);
      navigation.navigate("Container");
    } else {
      setAlert(true);
    }
  }

  return (
    <View style={{ height: "100%", width: "100%" }}>
      <BackgroundAuth title="Đăng nhập" >
        <InputCustom
          placeholder="Tên đăng nhập"
          onChangeText={formik.handleChange("username")}
          onBlur={formik.handleBlur("username")}
          value={formik.values.username}
          errorMessage={formik.errors.username && formik.touched.username ? formik.errors.username : undefined}
        />

        <InputCustom
          placeholder="Mật khẩu"
          onChangeText={formik.handleChange("password")}
          onBlur={formik.handleBlur("password")}
          value={formik.values.password}
          errorMessage={formik.errors.password && formik.touched.password ? formik.errors.password : undefined}
          secureTextEntry
        />

        <View style={{ width: "100%", marginTop: 50 }}>
          <ButtonCustom
            title={"Đăng nhập"}
            color={"#00c638"}
            loading={isLoading}
            disabled={isLoading}
            onPress={() => formik.handleSubmit()}
          />
        </View>

        <View style={{ width: "100%", marginTop: 20 }}>
          <DividerCustom title="Hoặc" />
        </View>

        <View style={{ width: "100%", marginTop: 20 }}>
          <ButtonCustom
            title={"Tạo tài khoản mới"}
            color={"#00c638"}
            disabled={isLoading}
            onPress={() => navigation.navigate("Register")}
          />
        </View>
      </BackgroundAuth>

      <AlertCustom
        type="error"
        show={alert}
        onClose={() => setAlert(false)}
        message="Sai tên đăng nhập hoặc mật khẩu"
      />
    </View>
  )
}

export default Login;