import { IconSvg } from "../../../../assets/export";
import { CardHomeProps } from "./card";

export const listCard: CardHomeProps[] = [
  {
    title: "Khóa học",
    detail: "Khóa học chất lượng - Nâng cao kiến thức",
    iconName: "notebook",
    backgroundColor: "#0300ff",
    icon: IconSvg.IconCourse({}),
  },
  {
    title: "Đại học",
    detail: "Quyết định đúng đắn - Nắm bắt tương lai",
    iconName: "school",
    backgroundColor: "#ff0000",
    icon: IconSvg.IconUniversity({}),
  },
  {
    title: "Việc làm",
    detail: "Học hỏi kinh nghiệm - Vững bước vào đời",
    iconName: "briefcase-search",
    backgroundColor: "#ffa200",
    icon: IconSvg.IconJob({}),
  },
  {
    title: "Ngoại khóa",
    detail: "Tìm kiếm cơ hội - Kết nối mọi người",
    iconName: "hand-extended",
    backgroundColor: "#00c638",
    icon: IconSvg.IconCamping({}),
  }
]
