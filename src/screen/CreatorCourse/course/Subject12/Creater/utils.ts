import { AlertCustomProps } from "../../../../../components/Alert"

export const alertCourse = (type: "success" | "error"): Omit<AlertCustomProps, "onClose"> => {
  return {
    message: type === "success" ? "Thêm khóa học thành công" : "Thêm khóa học thất bại",
    show: true,
    type,
  }
}

