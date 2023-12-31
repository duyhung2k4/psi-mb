import React from "react";

import { listTypeCouse } from "./utils";
import { View, Dimensions, Pressable } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import TypeCourseCard, { TypeCourseCardProps } from "../../../../components/TypeCourseCard";
import { arrayTowWay } from "../../../../utils/array";
import OverlayLoading from "../../../../components/OverlayLoading";
import OverlayHeader from "../../../../components/OverlayHeader";
import DividerCustom from "../../../../components/Divider";
import { StackParamList } from "../../../../routers/utils";

const CourseHome: React.FC = () => {
  const listTowWay: TypeCourseCardProps[][] = arrayTowWay<TypeCourseCardProps>(listTypeCouse);

  const navigation = useNavigation<NavigationProp<StackParamList, "CourseHome">>();  

  return (
    <OverlayLoading scroll={true}>
      <OverlayHeader>
        <View
          style={{
            width: "100%",
            height: "auto",
            padding: 10,
          }}
        >
          {
            listTowWay.map((d, index: number) =>
              <View
                key={index}
                style={{
                  width: "100%",
                  flex: 1,
                  flexDirection: "row",
                }}
              >
                {
                  d.map((c, i: number) =>
                    <View
                      key={i}
                      style={{
                        height: Dimensions.get("window").width / 2,
                        width: "50%",
                        padding: 10,
                        flex: 2,
                      }}
                    >
                      <Pressable
                        onPress={() => navigation.navigate(c.screen)}
                      >
                        {
                          c !== undefined &&
                          <TypeCourseCard
                            {...c}
                          />
                        }
                      </Pressable>
                    </View>
                  )
                }
              </View>
            )
          }
          <DividerCustom title="Các khóa học đề xuất" />
        </View>
      </OverlayHeader>
    </OverlayLoading>
  )
}

export default CourseHome;