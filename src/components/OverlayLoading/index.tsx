import React, { useEffect, useState } from "react";
import { View } from "react-native";

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
      }}
    >{show && props.children}</View>
  )
}

export default OverlayLoading;