import { Text } from "@rneui/base";
import React from "react";
import { View } from "react-native";
import { IconSvg } from "../../assets/export";

const TypeCourseCard: React.FC = () => {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        borderRadius: 8,
        backgroundColor: "gray",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 20,
        paddingTop: 20,
      }}
    >
      <IconSvg.IconSkill height={100} width={100} />
      <Text h3 style={{ color: "#FFFFFF", marginTop: 10 }}>Kĩ năng</Text>
    </View>
  )
}

export default TypeCourseCard;