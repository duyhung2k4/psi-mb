import React from "react";
import { ActivityIndicator, View } from "react-native";

const Loading: React.FC = () => {
  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActivityIndicator size="large" />
    </View>
  )
}

export default Loading;