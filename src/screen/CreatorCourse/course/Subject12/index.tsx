import { Text } from "@rneui/base";
import React from "react";
import { ScrollView, View } from "react-native";
import Modal from "react-native-modal";
import InputCustom from "../../../../components/Input";
import TimePickerCustom from "../../../../components/TimePicker";
import ButtonCustom from "../../../../components/Button";
import { styles } from "./styled";

const CourseTabSubject12: React.FC = () => {

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>CourseTabSubject12</Text>
      <Modal
        isVisible={false}
        coverScreen
      >
        <View
          style={{
            width: "100%",
            position: "absolute",
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            top: 0,
            zIndex: 2,
            backgroundColor: "#FFFFFF",
            padding: 20,
            paddingTop: 10,
            alignItems: "center",
            justifyContent: "center",
            height: 50,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
            }}
          >Thêm mới khóa học</Text>
        </View>
        <ScrollView
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#FFFFFF",
            padding: 20,
            paddingTop: 10,
            paddingBottom: 0,
            marginTop: 50,
            marginBottom: 70,
          }}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          <InputCustom
            label="Tên khóa học"
            placeholder="Tên khóa học"
          />
          <InputCustom
            label="Mục tiêu"
            placeholder="Mục tiêu"
          />
          <TimePickerCustom />
          <InputCustom
            label="Lịch học"
            placeholder="Lịch học"
          />
          <InputCustom
            label="Thời lượng khóa học"
            placeholder="Thời lượng khóa học (VD: 3 tháng)"
          />
          <InputCustom
            label="Ghi chú"
            placeholder="Ghi chú"
            multiline
            inputStyle={{
              minHeight: 100,
              verticalAlign: "top",
            }}
          />
        </ScrollView>

        <View style={styles.bottom}>
          <View style={{ flex: 2, marginRight: 5 }}>
            <ButtonCustom
              color={"red"}
              title={"Hủy"}
              titleStyle={{
                color: "#FFFFFF",
              }}
            />
          </View>
          <View style={{ flex: 2, marginLeft: 5 }}>
            <ButtonCustom
              title={"Xác nhận"}
              color={"#00c638"}
            />
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default CourseTabSubject12;