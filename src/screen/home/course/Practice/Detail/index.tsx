import React, { useEffect, useMemo } from "react";
import ButtonCustom from "../../../../../components/Button";
import OverlayLoading from "../../../../../components/OverlayLoading";
import BoxCenter from "../../../../../components/Box/BoxCenter";
import BoxTitleValue from "../../../../../components/Box/BoxTitleValue";

import { styles } from "./syled";
import { Text } from "@rneui/base";
import { RefreshControl, ScrollView, View } from "react-native";
import { CourseHomePracticeDetailProps } from "../../../../../routers/utils";
import { useFilterQuery } from "../../../../../redux/query/api/advanceFilter";
import { Subject12CourseModel } from "../../../../../model/subject12Course";
import Loading from "../../../../../components/Loading";
import { useAppSelector } from "../../../../../redux/hook";
import { RootState } from "../../../../../redux/store";
import { ProfileModel } from "../../../../../model/profile";


const CourseHomePracticeDetail: React.FC<CourseHomePracticeDetailProps> = ({ navigation, route }) => {
  const profile = useAppSelector((state: RootState) => state.auth.profile);
  
  const {
    data: courseFetch,
    isFetching: loadingCourse,
    refetch: refetchCourse,
  } = useFilterQuery({
    modelType: "subject12Course",
    conditions: {
      courseId: route.params.courseId,
    }
  });
  const subject12Course: Subject12CourseModel | undefined = useMemo(() => {
    if(!courseFetch?.data) return undefined;
    const subject12Course = ((courseFetch.data as any) as Subject12CourseModel[])[0];
    return subject12Course;
  }, [courseFetch]);

  const {
    data: creatorFetch,
    isFetching: loadingCreate,
    refetch: refetchCreator,
  } = useFilterQuery({
    modelType: "profile",
    conditions: { id: subject12Course?.course?.creatorId }
  });
  const creator = useMemo(() => {
    if(!creatorFetch?.data) return undefined;
    const creator = ((creatorFetch?.data as any) as ProfileModel[])[0];
    return creator;
  }, [creatorFetch]);


  useEffect(() => {
    refetchCourse();
  }, [])
  useEffect(() => {
    refetchCreator();
  }, [subject12Course]);

  if(!subject12Course || !creator) return <Loading/>;

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
          refreshControl={<RefreshControl refreshing={loadingCourse || loadingCreate} onRefresh={refetchCourse}/>}
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
                <Text style={{ fontSize: 16, fontWeight: "700" }}>{subject12Course.course?.name}</Text>
              </BoxCenter>

              <View style={{ width: "100%", marginTop: 30 }}>
                <BoxTitleValue
                  type="top"
                  title="Môn học"
                  value={subject12Course.subject12?.name}
                />
                <BoxTitleValue
                  type="bottom"
                  title="Mục tiêu"
                  value={subject12Course.targetPoint}
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
                  value={subject12Course.courseDuration}
                />
              </View>

              <View style={{ width: "100%", marginTop: 20 }}>
                <BoxTitleValue
                  type="simple"
                  title="Người tạo"
                  value={creator.credential?.username}
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
                >{subject12Course.note}</Text>
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
                  <Text style={{ fontSize: 18, fontWeight: "600" }}>{subject12Course.course?.price} </Text>
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