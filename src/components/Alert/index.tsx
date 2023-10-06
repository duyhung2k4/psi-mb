import { Text } from "@rneui/base";
import React from "react";
import { View } from "react-native";
import ButtonCustom from "../Button";
import { IconSvg } from "../../assets/export";
import Modal from "react-native-modal";
import { styles } from "./styled";

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
    <Modal
      isVisible={props.show}
      onBackdropPress={props.onClose}
      animationIn="zoomIn"
      animationOut="zoomOut"
    >
      <View style={styles.root}>
        {mapType[props.type]}
        <Text style={styles.mess}>{props.message}</Text>
        <View style={{ width: "100%" }}>
          <ButtonCustom
            onPress={props.onClose}
            title={"Đóng"}
          />
        </View>
      </View>
    </Modal>
  )
}

export default AlertCustom