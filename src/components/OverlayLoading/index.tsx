import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

interface OverlayLoadingProps {
  children: React.ReactNode
}
const OverlayLoading: React.FC<OverlayLoadingProps> = (props) => {
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {
        show ?
          props.children :
          <ActivityIndicator size="large" />
      }
    </View>
  )
}

export default OverlayLoading;