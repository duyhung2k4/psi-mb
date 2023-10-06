import React from "react";
import { Dimensions, ScrollView, View } from "react-native";
import InputCustom from "../../../components/Input";
import ButtonCustom from "../../../components/Button";
import { Text } from "@rneui/base";
import LinearGradient from "react-native-linear-gradient";
import { useSendInfoRegisterMutation } from "../../../redux/query/api/auth";
import { Formik } from "formik";
import { SendInfoRegisterPayload } from "../../../payload/auth.payload";

interface FormRegister {
  username: string
  email: string
  password: string
  repeatPassword: string
}

const Register: React.FC = () => {
  const [post, { isLoading }] = useSendInfoRegisterMutation();

  const initForm: FormRegister = {
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
  }


  const handlerSubmit = async (values: FormRegister) => {
    const data: SendInfoRegisterPayload = {
      username: values.username,
      password: values.password,
      email: values.email,
    }
    const result = await post(data);

    console.log(result);
  }
  return (
    <Formik
      initialValues={initForm}
      onSubmit={(values) => handlerSubmit(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <ScrollView
          style={{
            width: "100%",
            height: "100%",
          }}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            colors={["#00c638", "#f3fff1"]}
            style={{
              height: 150 + 20,
              width: "100%",
              backgroundColor: "#5BB790",
              marginBottom: -20,
              padding: 40
            }}
          >
            <Text h2 style={{ color: "#FFFFFF" }}>Đăng kí</Text>
          </LinearGradient>
          <View
            style={{
              width: "100%",
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              height: Dimensions.get("window").height - 150,
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              paddingLeft: 30,
              paddingTop: 50,
              paddingRight: 30,
              paddingBottom: 30
            }}
          >
            <View
              style={{
                width: "100%",
                alignItems: "center",
              }}
            >
              <Text h2>PSI 2023</Text>
            </View>
            <View style={{ width: "100%" }}>
              <InputCustom
                placeholder="Tên đăng nhập"
                onChangeText={handleChange("username")}
                onBlur={handleBlur("username")}
                value={values.username}
              />
              <InputCustom
                placeholder="Email"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
              <InputCustom
                placeholder="Mật khẩu"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                secureTextEntry
              />
              <InputCustom
                placeholder="Nhắc lại mật khẩu"
                onChangeText={handleChange("repeatPassword")}
                onBlur={handleBlur("repeatPassword")}
                value={values.repeatPassword}
                secureTextEntry
              />
              <View style={{ width: "100%", marginTop: 50 }}>
                <ButtonCustom
                  title={"Đăng kí"}
                  color={"#00c638"}
                  onPress={() => handleSubmit()}
                  loading={isLoading}
                  disabled={isLoading}
                />
              </View>
            </View>
            <View
              style={{
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  marginBottom: 10,
                  color: "#666666"
                }}>Được phát triển bởi T4</Text>
              <Text
                style={{
                  color: "#666666"
                }}
              >Copyright © 2023. Developed by T4</Text>
            </View>
          </View>
        </ScrollView>
      )}
    </Formik>
  )
}

export default Register;