import React from "react";
import { View, Dimensions, Pressable } from "react-native";
import TypeCourseCard, { TypeCourseCardProps } from "../../../components/TypeCourseCard";
import OverlayLoading from "../../../components/OverlayLoading";
import { listTypeCouse } from "./utils";
import { arrayTowWay } from "../../../utils/array";
import DividerCustom from "../../../components/Divider";
import OverlayHeader from "../../../components/OverlayHeader";
import { useAppNavigate } from "../../../hook/use-app-navigate";

const CourseHome: React.FC = () => {
  const listTowWay: TypeCourseCardProps[][] = arrayTowWay<TypeCourseCardProps>(listTypeCouse);

  const navigation = useAppNavigate();

  return (
    <OverlayLoading>
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
                      <Pressable onPress={() => navigation.navigate(c.screen, { id: i })}>
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