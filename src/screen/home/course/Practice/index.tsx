import React from "react";
import CourseCard from "../../../../components/CourseCard";
import OverlayLoading from "../../../../components/OverlayLoading";

import { View } from "react-native";
import { styles } from "./styled";

const CourseHomePractice: React.FC = () => {
  return (
    <OverlayLoading scroll >
      <View style={styles.root}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => <CourseCard key={n} id={n} style={{ marginBottom: 30, }} />)}
      </View>
    </OverlayLoading>
  )
}

export default CourseHomePractice;