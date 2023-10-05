import React from "react";
import { View, Dimensions, ScrollView } from "react-native";
import TypeCourseCard from "../../../components/TypeCourseCard";
import OverlayLoading from "../../../components/OverlayLoading";

const CourseHome: React.FC = () => {
  return (
    <OverlayLoading>
      <ScrollView
        style={{
          height: "100%",
          width: "100%",
          padding: 10,
        }}
      >
        {
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) =>
            <View
              key={n}
              style={{
                width: "100%",
                flex: 1,
                flexDirection: "row"
              }}
            >
              <View
                style={{
                  height: Dimensions.get("window").width / 2,
                  width: "50%",
                  padding: 10,
                  flex: 2,
                }}
              >
                <TypeCourseCard />
              </View>
              <View
                style={{
                  height: Dimensions.get("window").width / 2,
                  width: "50%",
                  padding: 10,
                  flex: 2,
                }}
              >
                <TypeCourseCard />
              </View>
            </View>
          )
        }
      </ScrollView>
    </OverlayLoading>
  )
}

export default CourseHome;