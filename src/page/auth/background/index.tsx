import React from "react";
import { styles } from "./styled";
import { ScrollView, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Text } from "@rneui/base";

interface BackgroundAuthProps {
  children: React.ReactNode
  title: string
}
const BackgroundAuth: React.FC<BackgroundAuthProps> = (props) => {
  return (
    <ScrollView
      style={styles.scrollView}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    >
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={["#00c638", "#76ff5f"]}
        style={styles.header}
      >
        <Text h2 style={{ color: "#FFFFFF" }}>{props.title}</Text>
      </LinearGradient>
      
      <View
        style={styles.form}
      >
        <View
          style={{
            width: "100%",
            alignItems: "center",
          }}
        >
          <Text h2>PSI 2023</Text>
        </View>



        {/* Form */}
        <View style={{ width: "100%" }}>{props.children}</View>
        {/* Form */}



        {/* Footer */}
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
        {/* Footer */}
      </View>
    </ScrollView>
  )
}
export default BackgroundAuth;