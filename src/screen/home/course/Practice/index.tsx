import React, { useEffect, useMemo } from "react";
import CourseCard from "../../../../components/CourseCard";
import OverlayLoading from "../../../../components/OverlayLoading";

import { RefreshControl, View } from "react-native";
import { styles } from "./styled";
import { useFilterQuery } from "../../../../redux/query/api/advanceFilter";
import { CourseHomePracticeProps } from "../../../../routers/utils";
import { Subject12CourseModel } from "../../../../model/subject12Course";

const CourseHomePractice: React.FC<CourseHomePracticeProps> = ({ navigation }) => {
  const {
    data: courseFetch,
    refetch,
    isFetching,
  } = useFilterQuery({
    modelType: "subject12Course",
    isPreload: true,
    stringPreLoad: ["Course"]
  });

  const course: Subject12CourseModel[] = useMemo(() => {
    return (courseFetch?.data || []) as Subject12CourseModel[];
  }, [courseFetch]);

  useEffect(() => {
    refetch();
  }, []);

  return (
    <OverlayLoading 
      scroll
      props={{
        refreshControl: <RefreshControl refreshing={isFetching} onRefresh={refetch} />
      }}
    >
      <View style={styles.root}>
        {
          course.map((c, index: number) => 
            <CourseCard
              key={index}
              info={{
                name: c.course?.name || "",
                price: c.course?.price || 0,
              }}
              style={{
                marginBottom: 20,
              }}
              onDetail={() => navigation.navigate("CourseHomePracticeDetail", { courseId: c.courseId })}
            />
          )
        }
      </View>
    </OverlayLoading>
  )
}

export default CourseHomePractice;