import React from "react";
import ButtonCustom from "../../../../../components/Button";
import OverlayLoading from "../../../../../components/OverlayLoading";
import BoxCenter from "../../../../../components/Box/BoxCenter";
import BoxTitleValue from "../../../../../components/Box/BoxTitleValue";

import { styles } from "./syled";
import { Text } from "@rneui/base";
import { ScrollView, View, RefreshControl } from "react-native";




const CourseHomePracticeDetail: React.FC = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  return (
    <OverlayLoading>
      <View
        style={{
          width: "100%",
          marginBottom: 70,
        }}
      >
        <ScrollView
          style={{
            width: "100%",
            height: "100%",
          }}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >

          <View style={{ width: "100%" }}>
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
              <BoxCenter
                style={{
                  backgroundColor: "#C9C9C9",
                }}
              >
                <Text style={{ fontSize: 16, fontWeight: "700" }}>Toán 12</Text>
              </BoxCenter>

              <View style={{ width: "100%", marginTop: 30 }}>
                <BoxTitleValue
                  type="top"
                  title="Môn học"
                  value="Toán"
                />
                <BoxTitleValue
                  type="bottom"
                  title="Mục tiêu"
                  value="8+"
                />
              </View>

              <View style={{ width: "100%", marginTop: 20 }}>
                <BoxTitleValue
                  type="top"
                  title="Thời gian"
                  value="8h - 12h tối"
                />
                <BoxTitleValue
                  type="center"
                  title="Ngày học"
                  value="Thứ 2 - 4 -6"
                />
                <BoxTitleValue
                  type="bottom"
                  title="Thời lượng"
                  value="3 tháng"
                />
              </View>

              <View style={{ width: "100%", marginTop: 20 }}>
                <BoxTitleValue
                  type="simple"
                  title="Người tạo"
                  value="Nguyễn Văn A"
                />
              </View>

              <BoxCenter
                style={{
                  backgroundColor: "#C9C9C9",
                  marginTop: 20,
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "700",
                    width: "100%",
                    textAlign: "auto",
                    minHeight: 150,
                  }}
                >
                  Giúp các bạn nắm rõ kiến thức về môn Toán 
                  Giúp các bạn nắm rõ kiến thức
                </Text>
              </BoxCenter>

              <BoxCenter
                style={{
                  backgroundColor: "#C9C9C9",
                  marginTop: 20,
                  marginBottom: 10,
                }}
              >
                <Text>
                  <Text style={{ fontSize: 18, fontWeight: "700" }}>Giá: </Text>
                  <Text style={{ fontSize: 18, fontWeight: "600" }}>1000000 </Text>
                  <Text style={{ fontSize: 18, fontWeight: "700" }}>VND</Text>
                </Text>
              </BoxCenter>

            </View>

          </View>

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