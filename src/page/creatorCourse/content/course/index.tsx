import React, { useState } from "react";
import { View } from "react-native";
import { Tab, TabView, Text } from "@rneui/base";
import CourseTabSubject12 from "../../../../screen/CreatorCourse/course/Subject12";
import CourseTabMajor from "../../../../screen/CreatorCourse/course/Major";
import CourseTabCentificate from "../../../../screen/CreatorCourse/course/Centificate";
import CourseTabSkill from "../../../../screen/CreatorCourse/course/Skill";

const Course: React.FC = () => {
  const [index, setIndex] = useState(0);

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
          <CourseTabSubject12/>
        </TabView.Item>
        <TabView.Item style={{ width: '100%', height: "100%" }}>
          <CourseTabMajor/>
        </TabView.Item>
        <TabView.Item style={{ width: '100%', height: "100%" }}>
          <CourseTabCentificate/>
        </TabView.Item>
        <TabView.Item style={{ width: '100%', height: "100%" }}>
          <CourseTabSkill/>
        </TabView.Item>
      </TabView>
    </View>
  )
}

export default Course;