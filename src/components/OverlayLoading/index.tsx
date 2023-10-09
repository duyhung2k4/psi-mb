import React, { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, View, ScrollViewProps } from "react-native";

interface OverlayLoadingProps {
  children: React.ReactNode
  scroll?: boolean
  props?: ScrollViewProps
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
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                {...props.props}
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