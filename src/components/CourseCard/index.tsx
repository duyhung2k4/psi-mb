import React from "react";
import ButtonCustom from "../Button";

import { Text } from "@rneui/base";
import { StyleProp, View, ViewStyle } from "react-native";
import { styles } from "./styled";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { StackParamList } from "../../routers/utils";


const TitlePrice: React.FC = () => {
  return (
    <View style={styles.titlePrice}>
      <Text
        style={{
          color: "#00c638",
          fontSize: 16,
          fontWeight: "700",
        }}
      >Giá: </Text>
      <Text>20000000 <Text style={{ fontWeight: "800" }}>VND</Text></Text>
    </View>
  )
}

export interface CourseCardProps {
  id: number,
  style?: StyleProp<ViewStyle>
}
const CourseCard: React.FC<CourseCardProps> = (props) => {
  const navigation = useNavigation<NavigationProp<StackParamList, "CourseHomePractice">>();
  return (
    <View
      style={{
        ...(styles.root),
        ...(props.style as any),
      }}
    >
      {/* Image */}
      <View style={styles.image}>

      </View>

      {/* Bottom */}
      <View style={styles.bottom}>

        <View
          style={{
            height: 50,
          }}
        >
          <Text
            numberOfLines={2}
            style={{
              fontSize: 16,
              fontWeight: "800"
            }}
          >
            Khóa học 1 Khóa học 1 Khóa học 1 Khóa học 1 Khóa học 1 Khóa học 1 Khóa học 1 Khóa học 1 Khóa học 1 Khóa học 1 Khóa học 1 Khóa học 1 Khóa học 1 Khóa học 1 Khóa học 1 Khóa học 1
          </Text>
        </View>



        <View style={styles.option}>
          <View style={{ flex: 2, marginRight: 10, }}>
            <ButtonCustom
              title={<TitlePrice/>}
              color={"#FFFFFF"}
              titleStyle={{
                color: "#00c638",
              }}
              buttonStyle={{
                borderWidth: 2,
                borderColor: "#00c638",
              }}
            />
          </View>
          <View style={{ flex: 2, marginLeft: 10, }}>
            <ButtonCustom
              title={"Chi tiết"}
              onPress={() => navigation.navigate("CourseHomePracticeDetail", { id: props.id })}
              buttonStyle={{
                borderWidth: 2,
                borderColor: "#00c638",
              }}
            />
          </View>
        </View>

      </View>
    </View>
  )
}

export default CourseCard;