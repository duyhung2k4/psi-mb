import React from "react";
import ButtonCustom from "../../../../../components/Button";
import OverlayLoading from "../../../../../components/OverlayLoading";

import { styles } from "./syled";
import { Text } from "@rneui/base";
import { ScrollView, View } from "react-native";



const CourseHomePracticeDetail: React.FC = () => {
  return (
    <OverlayLoading>

      <View style={{ width: "100%", marginBottom: 70, }}>
        <ScrollView
          style={{
            width: "100%",
            height: "100%",
          }}
        >

          {[1, 2, 3, 4, 5, 6, 7, 8].map((n) =>
            <View style={{ width: "100%" }} key={n}>
              <View
                style={{
                  width: "100%",
                  height: 250,
                  backgroundColor: "gray",
                }}
              >
                {/* Image */}
              </View>
              <View
                style={{
                  width: "100%",
                  paddingLeft: 10,
                  paddingRight: 10,
                  marginTop: 20,
                }}
              >
                <Text>CourseHomePracticeDetail</Text>
              </View>
            </View>
          )}
        </ScrollView>
      </View>


      <View style={styles.bottom}>
        <View style={{ flex: 2, marginRight: 5 }}>
          <ButtonCustom
            color={"#FFFFFF"}
            title={"Lưu khóa học"}
            buttonStyle={{
              borderWidth: 2,
              borderColor: "#00c638",
            }}
            titleStyle={{
              color: "#00c638",
            }}
          />
        </View>
        <View style={{ flex: 2, marginLeft: 5 }}>
          <ButtonCustom
            title={"Đăng kí"}
            buttonStyle={{
              borderWidth: 2,
              borderColor: "#00c638",
            }}
          />
        </View>
      </View>


    </OverlayLoading>
  )
}

export default CourseHomePracticeDetail;