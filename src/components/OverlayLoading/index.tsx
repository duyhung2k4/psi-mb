import React, { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, View } from "react-native";

interface OverlayLoadingProps {
  children: React.ReactNode
  scroll?: boolean
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
          (
            props.scroll && props.scroll === true ?
              <ScrollView
                style={{
                  width: "100%",
                  height: "100%",
                }}
              >{props.children}</ScrollView> :
              props.children
          )
          :
          <ActivityIndicator size="large" />
      }
    </View>
  )
}

export default OverlayLoading;