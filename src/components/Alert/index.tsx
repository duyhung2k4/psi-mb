import { Dialog, Text } from "@rneui/base";
import React from "react";
import { View } from "react-native";
import ButtonCustom from "../Button";
import { IconSvg } from "../../assets/export";

interface AlertCustomProps {
  message: string
  show: boolean
  onClose: () => void
  type: "success" | "warning" | "error"
}
const AlertCustom: React.FC<AlertCustomProps> = (props) => {

  const mapType: Record<"success" | "warning" | "error", React.ReactNode> = {
    success: <IconSvg.IconSuccess height={40} width={40} />,
    warning: <IconSvg.IconWarning height={40} width={40} />,
    error: <IconSvg.IconError height={40} width={40} />
  }

  return (
    <Dialog
      isVisible={props.show}
      overlayStyle={{
        backgroundColor: "#FFFFFF",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 8,
        minHeight: 200,
      }}
      onBackdropPress={props.onClose}
    >
      {mapType[props.type]}
      <Text
        style={{
          marginTop: 20,
          marginBottom: 40,
        }}
      >{props.message}</Text>
      <View style={{ width: "100%" }}>
        <ButtonCustom
          onPress={props.onClose}
          title={"Đóng"}
        />
      </View>
    </Dialog>
  )
}

export default AlertCustom