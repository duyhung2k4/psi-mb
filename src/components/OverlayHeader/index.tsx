import { Text } from "@rneui/base";
import React from "react";
import { ScrollView, View } from "react-native";

interface OverlayHeaderProps {
  children: React.ReactNode
  onScrollEnd?: () => void
}
const OverlayHeader: React.FC<OverlayHeaderProps> = (props) => {
  return (
    <ScrollView
      style={{
        height: "100%",
        width: "100%",
      }}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      onScrollEndDrag={props.onScrollEnd}
    >
      <View
        style={{
          width: "100%",
          height: 200,
          backgroundColor: "gray",
          marginBottom: -20,
        }}
      >
        <Text>HEHE</Text>
      </View>
      <View
        style={{
          width: "100%",
          height: "auto",
          borderRadius: 20,
          backgroundColor: "#FFFFFF",
        }}
      >
        {props.children}
      </View>
    </ScrollView>
  )
}

export default OverlayHeader;