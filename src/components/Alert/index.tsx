import React from "react";
import Modal from "react-native-modal";
import ButtonCustom from "../Button";

import { Text } from "@rneui/base";
import { View } from "react-native";
import { IconSvg } from "../../assets/export";
import { styles } from "./styled";

export type TypeAlert = "success" | "warning" | "error"
export interface AlertCustomProps {
  message: string
  show: boolean
  onClose: () => void
  type: TypeAlert
}
const AlertCustom: React.FC<AlertCustomProps> = (props) => {

  const mapType: Record<TypeAlert, React.ReactNode> = {
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