import { Text } from "@rneui/base";
import React from "react";
import { View } from "react-native";
import PickerSelect, { PickerSelectProps } from 'react-native-picker-select';

interface SelectCustomProps {
  label?: string
  props: PickerSelectProps
}
const SelectCustom: React.FC<SelectCustomProps> = (props) => {
  return (
    <View
      style={{
        width: "100%",
        marginBottom: 20,
      }}
    >
      {props.label &&
        <Text
          style={{
            color: "#909BA4",
            fontWeight: "bold",
            fontSize: 16
          }}
        >{props.label}</Text>
      }
      <PickerSelect
        {...props.props}
        style={{
          viewContainer: {
            borderRadius: 8,
            height: 50,
            backgroundColor: "#F1F4F5",
          }
        }}
      />
    </View>
  )
}

export default SelectCustom;