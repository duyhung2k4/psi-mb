import { Text } from "@rneui/base";
import React, { useMemo, useState } from "react";
import Loading from "../../../../../components/Loading";
import InputCustom from "../../../../../components/Input";
import ButtonCustom from "../../../../../components/Button";
import SelectCustom from "../../../../../components/Select";
import TimePickerCustom from "../../../../../components/TimePicker";
import AlertCustom, { AlertCustomProps } from "../../../../../components/Alert";
import ConfirmCustom, { ConfirmCustomProps } from "../../../../../components/Confirm";

import { styles } from "./styled";
import { useFilterQuery } from "../../../../../redux/query/api/advanceFilter";
import { Subject12Model } from "../../../../../model/subject12";
import { useFormik } from "formik";
import { alertCourse } from "./utils";
import { useInsertQueryMutation, useUpdateQueryMutation } from "../../../../../redux/query/api/basicQuery";
import { useAppSelector } from "../../../../../redux/hook";
import { RootState } from "../../../../../redux/store";
import { CourseModel, TYPE_COURSE } from "../../../../../model/course";
import { OmitBaseModel } from "../../../../../model/base";
import { Subject12CourseModel } from "../../../../../model/subject12Course";
import { ScrollView, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParamList } from "../../../../../routers/utils";
import { FormCourseSubject12 } from "../utils";

type Props = NativeStackScreenProps<StackParamList, "CreaterCourseSubject12">;
const CreaterCourseSubject12: React.FC<Props> = ({ navigation }) => {
  const profile = useAppSelector((state: RootState) => state.auth.profile);
  const [alert, setAlert] = useState<Omit<AlertCustomProps, "onClose">>({ message: "", show: false, type: "success" });
  const [confirm, setConfirm] = useState<ConfirmCustomProps>({ message: "", show: false });

  const {
    data: subject12Fetch,
    isLoading: subject12IsLoading,
  } = useFilterQuery({
    modelType: "subject12",
  });
  const subject12s = useMemo(() => {
    let data = subject12Fetch?.data || [];
    const subject12s = data as Subject12Model[];
    return subject12s;
  }, [subject12Fetch]);

  const [post, { isLoading: isLoadingPost }] = useInsertQueryMutation();
  const [put, { isLoading: isLoadingPut }] = useUpdateQueryMutation();

  const form = useFormik<FormCourseSubject12>({
    initialValues: {
      name: "",
      subjectCode: "",
      targetPoint: "",
      startTime: "",
      endTime: "",
      schedule: "",
      courseDuration: "",
      note: "",
    },
    onSubmit: (values) => {
      hanlderSubmit(values);
    }
  });



  const hanlderSubmit = async (values: FormCourseSubject12) => {
    if(profile === undefined) return;
    const createCourse: Omit<CourseModel, OmitBaseModel> = {
      creatorId: profile.id,
      name: values.name,
      code: "",
      type: TYPE_COURSE.SUBJECT12,
      detail: values.note,
      price: 0,
    }

    const resultCreateCourse = await post({
      modelType: "course",
      data: createCourse,
    });

    if("error" in resultCreateCourse) {
      setAlert(alertCourse("error"));
      return;
    }

    const newCourse = (resultCreateCourse.data.data as any) as CourseModel;
    const newCourseAddCode = {
      ...newCourse,
      code: `${newCourse.id}_${newCourse.creatorId}_${newCourse.type}`,
    }

    const resultUpdateCourse = await put({
      modelType: "course",
      data: newCourseAddCode,
    });

    if("error" in resultUpdateCourse) {
      setAlert(alertCourse("error"));
      return;
    }

    const updateCourse = (resultUpdateCourse.data.data as any) as CourseModel;

    const courseSubject12: Omit<Subject12CourseModel, OmitBaseModel> = {
      subject12Code: values.subjectCode,
      courseId: updateCourse.id,
      targetPoint: values.targetPoint,
      schedule: values.schedule,
      courseDuration: values.courseDuration,
      note: values.note,
    }

    const resultCreateCourseSubject12 = await post({
      modelType: "subject12Course",
      data: courseSubject12,
    });

    if("error" in resultCreateCourseSubject12) {
      setAlert(alertCourse("error"));
      return;
    }

    setAlert(alertCourse("success"));
  }




  if(subject12IsLoading) return <Loading/>

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: "100%",
          position: "absolute",
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          top: 0,
          zIndex: 2,
          backgroundColor: "#FFFFFF",
          padding: 20,
          paddingTop: 10,
          alignItems: "center",
          justifyContent: "center",
          height: 50,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
          }}
        >Thêm mới khóa học</Text>
      </View>
      <ScrollView
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#FFFFFF",
          padding: 20,
          paddingTop: 0,
          paddingBottom: 0,
          marginBottom: 70,
          marginTop: 50,
        }}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <InputCustom
          label="Tên khóa học"
          placeholder="Tên khóa học"
          value={form.values.name}
          onChangeText={form.handleChange("name")}
        />
        <SelectCustom
          label="Môn học"
          props={{
            onValueChange: form.handleChange("subjectCode"),
            value: form.values.subjectCode,
            items: subject12s.map((s, index) => ({ key: index, label: s.name, value: s.code })),
          }}
        />
        <InputCustom
          label="Mục tiêu"
          placeholder="Mục tiêu"
          value={form.values.targetPoint}
          onChangeText={form.handleChange("targetPoint")}
        />
        <TimePickerCustom
          label="Thời gian"
        />
        <InputCustom
          label="Lịch học"
          placeholder="Lịch học"
          value={form.values.schedule}
          onChangeText={form.handleChange("schedule")}
        />
        <InputCustom
          label="Thời lượng khóa học"
          placeholder="Thời lượng khóa học (VD: 3 tháng)"
          value={form.values.courseDuration}
          onChangeText={form.handleChange("courseDuration")}
        />
        <InputCustom
          label="Ghi chú"
          placeholder="Ghi chú"
          multiline
          value={form.values.note}
          onChangeText={form.handleChange("note")}
          inputStyle={{
            minHeight: 100,
            verticalAlign: "top",
          }}
        />
      </ScrollView>

      <View style={styles.bottom}>
        <View style={{ flex: 2, marginRight: 5 }}>
          <ButtonCustom
            color={"red"}
            title={"Hủy"}
            disabled={isLoadingPost || isLoadingPut}
            onPress={() => setConfirm({ message: "Xác nhận hủy thêm mới khóa học", show: true })}
            titleStyle={{
              color: "#FFFFFF",
            }}
          />
        </View>
        <View style={{ flex: 2, marginLeft: 5 }}>
          <ButtonCustom
            title={"Xác nhận"}
            color={"#00c638"}
            loading={isLoadingPost || isLoadingPut}
            onPress={() => form.handleSubmit()}
          />
        </View>
      </View>

      <AlertCustom
        {...alert}
        onClose={() => {
          setAlert({ message: "", show: false, type: "success" });
          navigation.navigate("ContainerCreatorCourse");
        }}
      />
      <ConfirmCustom  
        {...confirm}
        onCancel={() => setConfirm({ message: "", show: false })}
        onConfirm={() => {
          setConfirm({ message: "", show: false });
          navigation.navigate("ContainerCreatorCourse");
        }}
      />
    </View>
  )
}

export default CreaterCourseSubject12;