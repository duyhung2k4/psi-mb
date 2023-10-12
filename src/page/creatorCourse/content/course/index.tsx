import React, { useState } from "react";
import { Pressable, View } from "react-native";
import { Tab, TabView, SpeedDial, Text, Tooltip } from "@rneui/base";
import CourseTabSubject12 from "../../../../screen/CreatorCourse/course/Subject12";
import CourseTabMajor from "../../../../screen/CreatorCourse/course/Major";
import CourseTabCentificate from "../../../../screen/CreatorCourse/course/Centificate";
import CourseTabSkill from "../../../../screen/CreatorCourse/course/Skill";
import { IconSvg } from "../../../../assets/export";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { StackParamList } from "../../../../routers/utils";

const Course: React.FC = () => {
  const [index, setIndex] = useState(0);

  const navigation = useNavigation<NavigationProp<StackParamList, "ContainerCreatorCourse">>();

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        scrollable
        indicatorStyle={{
          backgroundColor: "black",
          height: 4,
          borderRadius: 2,
        }}
      >
        <Tab.Item
          title="Ôn thi 12"
          titleStyle={{
            fontSize: 12,
            color: "black",
          }}
        />
        <Tab.Item
          title="Ngành học"
          titleStyle={{
            fontSize: 12,
            color: "black"
          }}
        />
        <Tab.Item
          title="Ngoại ngữ"
          titleStyle={{
            fontSize: 12,
            color: "black"
          }}
        />
        <Tab.Item
          title="Kĩ năng"
          titleStyle={{
            fontSize: 12,
            color: "black"
          }}
        />
      </Tab>

      <TabView
        value={index}
        onChange={setIndex}
        animationType="spring"
      >
        <TabView.Item style={{ width: '100%', height: "100%" }}>
          <CourseTabSubject12 />
        </TabView.Item>
        <TabView.Item style={{ width: '100%', height: "100%" }}>
          <CourseTabMajor />
        </TabView.Item>
        <TabView.Item style={{ width: '100%', height: "100%" }}>
          <CourseTabCentificate />
        </TabView.Item>
        <TabView.Item style={{ width: '100%', height: "100%" }}>
          <CourseTabSkill />
        </TabView.Item>
      </TabView>

      <Pressable
        onPress={() => {
          switch (index) {
            case 0:
              navigation.navigate("CreaterCourseSubject12")
              break;
            default:
              break;
          }
        }}
      >
        <View
          style={{
            position: "absolute",
            bottom: 20,
            right: 20,
            borderRadius: 35,
            height: 70,
            width: 70,
            backgroundColor: "#FFFFFF",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconSvg.IconFolderPlus
            height={40}
            width={40}
          />
        </View>
      </Pressable>
    </View>
  )
}

export default Course;