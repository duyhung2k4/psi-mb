import React, { useEffect, useMemo, useState } from "react";
import ButtonCustom from "../../../../../components/Button";
import OverlayLoading from "../../../../../components/OverlayLoading";
import BoxCenter from "../../../../../components/Box/BoxCenter";
import BoxTitleValue from "../../../../../components/Box/BoxTitleValue";
import Loading from "../../../../../components/Loading";
import AlertCustom, { AlertCustomProps } from "../../../../../components/Alert";

import { styles } from "./syled";
import { Text } from "@rneui/base";
import { RefreshControl, ScrollView, View } from "react-native";
import { CourseHomePracticeDetailProps } from "../../../../../routers/utils";
import { useFilterQuery } from "../../../../../redux/query/api/advanceFilter";
import { Subject12CourseModel } from "../../../../../model/subject12Course";
import { useAppSelector } from "../../../../../redux/hook";
import { RootState } from "../../../../../redux/store";
import { useDeleteQueryMutation, useInsertQueryMutation } from "../../../../../redux/query/api/basicQuery";
import { SaveCourseModel } from "../../../../../model/saveCourse";
import { RegisterCourseModel, STATUS_REGISTER } from "../../../../../model/registerCourse";

const CourseHomePracticeDetail: React.FC<CourseHomePracticeDetailProps> = ({ navigation, route }) => {
  const profile = useAppSelector((state: RootState) => state.auth.profile);

  

  const [loadingSaveCourse, setLoadingSaveCourse] = useState<boolean>(false);
  const [loadingRegisterCourse, setLoadingRegisterCourse] = useState<boolean>(false);
  const [alert, setAlert] = useState<Omit<AlertCustomProps, "onClose">>({ message: "", type: "success", show: false });



  const [post] = useInsertQueryMutation();
  const [deleteQuery] = useDeleteQueryMutation();



  // Get data subject12Course
  const {
    data: courseFetch,
    isFetching: fetchingSubject12Course,
    refetch: refetchSubject12Course,
  } = useFilterQuery({
    modelType: "subject12Course",
    conditions: {
      courseId: route.params.courseId,
    },
    isPreload: true,
    stringPreLoad: ["Course", "Course.Creator", "Course.Creator.Credential"]
  });
  const subject12Course: Subject12CourseModel | undefined = useMemo(() => {
    if (!courseFetch?.data) return undefined;
    const subject12Course = ((courseFetch.data as any) as Subject12CourseModel[])[0];
    return subject12Course;
  }, [courseFetch]);




  // Get data save course
  const {
    data: saveCourseFetch,
    isFetching: fetchingSaveCourse,
    refetch: refetchSaveCourse,
  } = useFilterQuery({
    modelType: "saveCourse",
    conditions: {
      profileId: profile?.id || 0,
      courseId: subject12Course?.courseId || 0,
    } as SaveCourseModel
  });
  const saveCourse: SaveCourseModel | undefined = useMemo(() => {
    if (!saveCourseFetch?.data) return undefined;
    const saveCourse = ((saveCourseFetch.data as any) as SaveCourseModel[])[0];
    return saveCourse;
  }, [saveCourseFetch]);

  // Get data register course
  const {
    data: registerCourseFetch,
    isFetching: fetchingRegisterCourse,
    refetch: refetchRegisterCourse,
  } = useFilterQuery({
    modelType: "registerCourse",
    conditions: {
      profileId: profile?.id || 0,
      courseId: subject12Course?.courseId || 0,
    } as SaveCourseModel
  });
  const registerCourse: RegisterCourseModel | undefined = useMemo(() => {
    if (!registerCourseFetch?.data) return undefined;
    const registerCourse = ((registerCourseFetch.data as any) as RegisterCourseModel[])[0];
    return registerCourse;
  }, [registerCourseFetch]);



  useEffect(() => {
    refetchSaveCourse();
    refetchRegisterCourse();
    refetchSubject12Course();
  }, []);



  // Handler save course
  const handlerSaveCourse = async () => {
    if (!subject12Course?.courseId || !profile?.id) {
      setAlert({
        type: "error",
        message: "Lưu thất bại",
        show: true,
      });
      return;
    }

    setLoadingSaveCourse(true);
    const result = await post({
      modelType: "saveCourse",
      data: {
        courseId: subject12Course?.courseId,
        profileId: profile?.id,
      } as SaveCourseModel,
    });

    if ("data" in result) {
      setAlert({
        type: "success",
        message: "Lưu thành công",
        show: true,
      });
    } else {
      setAlert({
        type: "error",
        message: "Lưu thất bại",
        show: true,
      });
    }

    refetchSaveCourse();
    refetchSubject12Course();
    setLoadingSaveCourse(false);
  }

  const handerDeleteSaveCourse = async () => {
    if(!saveCourse) {
      setAlert({
        type: "error",
        message: "Bỏ lưu thất bại",
        show: true,
      });
      return;
    }

    setLoadingSaveCourse(true);

    const result = await deleteQuery({
      modelType: "saveCourse",
      data: { id: saveCourse.id }
    });

    if ("data" in result) {
      setAlert({
        type: "success",
        message: "Bỏ lưu thành công",
        show: true,
      });
    } else {
      setAlert({
        type: "error",
        message: "Bỏ lưu thất bại",
        show: true,
      });
    }

    refetchSaveCourse();
    refetchSubject12Course();
    setLoadingSaveCourse(false);
  }




  // Handler register course
  const handlerRegisterCourse = async () => {
    if (!subject12Course?.courseId || !profile?.id) {
      setAlert({
        type: "error",
        message: "Đăng kí thất bại",
        show: true,
      });
      return;
    }

    setLoadingRegisterCourse(true);
    const result = await post({
      modelType: "registerCourse",
      data: {
        courseId: subject12Course?.courseId,
        profileId: profile?.id,
        status: STATUS_REGISTER.PENDING
      } as RegisterCourseModel,
    });

    if ("data" in result) {
      setAlert({
        type: "success",
        message: "Đăng kí thành công",
        show: true,
      });
    } else {
      setAlert({
        type: "error",
        message: "Đăng kí thất bại",
        show: true,
      });
    }

    refetchSaveCourse();
    refetchRegisterCourse();
    refetchSubject12Course();
    setLoadingRegisterCourse(false);
  }

  const handlerCancelRegisterCourse = async () => {
    if(!registerCourse) {
      setAlert({
        type: "error",
        message: "Hủy đăng kí thất bại",
        show: true,
      });
      return;
    }

    setLoadingRegisterCourse(true);

    const result = await deleteQuery({
      modelType: "registerCourse",
      data: { id: registerCourse.id }
    });

    if ("data" in result) {
      setAlert({
        type: "success",
        message: "Hủy đăng kí thành công",
        show: true,
      });
    } else {
      setAlert({
        type: "error",
        message: "Hủy đăng kí thất bại",
        show: true,
      });
    }

    refetchSaveCourse();
    refetchRegisterCourse();
    refetchSubject12Course();
    setLoadingRegisterCourse(false);
  }



  if (!subject12Course) return <Loading />;



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
          refreshControl={
            <RefreshControl
              refreshing={fetchingSubject12Course}
              onRefresh={() => {
                refetchSaveCourse();
                refetchRegisterCourse();
                refetchSubject12Course();
              }}
            />
          }
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
                  value={subject12Course.course?.creator?.credential?.username}
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
              title={saveCourse ? "Đã lưu" : "Lưu khóa học"}
              loading={loadingSaveCourse || fetchingSaveCourse}
              disabled={loadingRegisterCourse}
              loadingProps={{
                color: "#00c638"
              }}
              buttonStyle={{
                borderWidth: loadingRegisterCourse? 0 : 2,
                borderColor: "#00c638",
              }}
              onPress={() => {
                if (!saveCourse) {
                  handlerSaveCourse();
                } else {
                  handerDeleteSaveCourse();
                }
              }}
              titleStyle={{
                color: "#00c638",
              }}
            />
          </View>
          <View style={{ flex: 2, marginLeft: 5 }}>
            <ButtonCustom
              title={
                registerCourse ?
                  (registerCourse.status === STATUS_REGISTER.ACCEPTED ? "Đã học" : "Hủy đăng kí")
                  : "Đăng kí"
              }
              loading={loadingRegisterCourse || fetchingRegisterCourse}
              disabled={loadingSaveCourse}
              color={registerCourse && registerCourse.status !== STATUS_REGISTER.ACCEPTED ? "red" : "#00c638"}
              onPress={() => {
                if (!registerCourse) {
                  handlerRegisterCourse();
                  return;
                }
                if(registerCourse.status === STATUS_REGISTER.ACCEPTED) {
                  return;
                }
                handlerCancelRegisterCourse();
              }}
            />
          </View>
        </View>


      <AlertCustom
        {...alert}
        onClose={() =>
          setAlert({
            message: "",
            type: "success",
            show: false
          })}
      />
    </OverlayLoading>
  )
}

export default CourseHomePracticeDetail;