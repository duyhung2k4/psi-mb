import React from "react";
import ButtonCustom from "../Button";

import { Text } from "@rneui/base";
import { StyleProp, View, ViewStyle } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { StackParamList } from "../../routers/utils";
import { styles } from "./styled";
import TitlePrice from "./TitlePrice";

export interface CourseCardProps {
  style?: StyleProp<ViewStyle>
  info: {
    name: string
    price: number
  }
  onDetail?: () => void
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
            {props.info.name}
          </Text>
        </View>



        <View style={styles.option}>
          <View style={{ flex: 2, marginRight: 10, }}>
            <ButtonCustom
              title={<TitlePrice price={props.info.price} />}
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
              onPress={props.onDetail}
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