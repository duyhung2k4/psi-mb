import React, { useState } from "react";
import TimePicker from "react-native-modal-datetime-picker";

import { Text } from "@rneui/base";
import { Pressable, View } from "react-native";
import { IconSvg } from "../../assets/export";
import dayjs from "dayjs";


type TYPE_MODE = "date" | "time";

const FORMAT_TIME: Record<TYPE_MODE, string> = {
  date: "DD/MM/YYYY",
  time: "HH:mm"
}

interface TimePickerCustomProps {
  mode?: TYPE_MODE
}
const TimePickerCustom: React.FC<TimePickerCustomProps> = (props) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState<Date | null>(null);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    setDate(date);
    hideDatePicker();
  };

  return (
    <View
      style={{
        width: "100%",
      }}
    >
      <Text
        style={{
          color: "#909BA4",
          fontWeight: "bold",
          fontSize: 16
        }}
      >Thời gian</Text>
      <Pressable onPress={showDatePicker}>
        <View
          style={{
            width: "100%",
            height: 50,
            backgroundColor: "#F1F4F5",
            borderRadius: 8,
            paddingLeft: 16,
            paddingRight: 16,
            marginBottom: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View><Text>{date ? dayjs(date).format(props.mode ? FORMAT_TIME[props.mode] : FORMAT_TIME.date) : ""}</Text></View>
          <IconSvg.IconCalendar height={26} width={26} />
        </View>
      </Pressable>

      <TimePicker
        isVisible={isDatePickerVisible}
        mode={props.mode || "date"}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  )
}

export default TimePickerCustom;