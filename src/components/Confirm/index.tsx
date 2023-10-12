import React from "react";
import Modal from "react-native-modal";
import ButtonCustom from "../Button";

import { Text } from "@rneui/base";
import { View } from "react-native";
import { IconSvg } from "../../assets/export";
import { styles } from "./styled";

export interface ConfirmCustomProps {
  message: string
  show: boolean
  onCancel?: () => void
  onConfirm?: () => void
}
const ConfirmCustom: React.FC<ConfirmCustomProps> = (props) => {

  return (
    <Modal
      isVisible={props.show}
      onBackdropPress={props.onCancel}
      animationIn="zoomIn"
      animationOut="zoomOut"
    >
      <View style={styles.root}>
        <IconSvg.IconWarning height={40} width={40} />
        <Text style={styles.mess}>{props.message}</Text>
        <View
          style={{
            width: "100%",
            flex: 1,
            flexDirection: "row",
          }}
        >
          <View style={{ flex: 2, marginRight: 5, height: 70 }}>
            <ButtonCustom
              onPress={props.onCancel}
              title={"Không"}
              titleStyle={{ color: "#FFFFFF" }}
              color={"red"}
            />
          </View>
          <View style={{ flex: 2, marginLeft: 5, height: 70 }}>
            <ButtonCustom
              onPress={props.onConfirm}
              title={"Xác nhận"}
            />
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default ConfirmCustom