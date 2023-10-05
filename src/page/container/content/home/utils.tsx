import { IconSvg } from "../../../../assets/export";
import { SCREEN } from "../../../../constants/router";
import { CardHomeProps } from "./card";

export const listCard: CardHomeProps[] = [
  {
    title: "Khóa học",
    detail: "Khóa học chất lượng - Nâng cao kiến thức",
    iconName: "notebook",
    backgroundColor: "#0300ff",
    icon: IconSvg.IconCourse({}),
    href: SCREEN.CONTAINER.HOME.COURSE.INDEX,
  },
  {
    title: "Đại học",
    detail: "Quyết định đúng đắn - Nắm bắt tương lai",
    iconName: "school",
    backgroundColor: "#ff0000",
    icon: IconSvg.IconUniversity({}),
    href: SCREEN.CONTAINER.HOME.UNIVERSITY.INDEX,
  },
  {
    title: "Việc làm",
    detail: "Học hỏi kinh nghiệm - Vững bước vào đời",
    iconName: "briefcase-search",
    backgroundColor: "#ffa200",
    icon: IconSvg.IconJob({}),
    href: SCREEN.CONTAINER.HOME.JOB.INDEX,
  },
  {
    title: "Ngoại khóa",
    detail: "Tìm kiếm cơ hội - Kết nối mọi người",
    iconName: "hand-extended",
    backgroundColor: "#00c638",
    icon: IconSvg.IconCamping({}),
    href: SCREEN.CONTAINER.HOME.EXTRACURRICULAR.INDEX,
  },
  {
    title: "Mentor",
    detail: "Người giúp đỡ bạn vượt qua những vấn đề",
    iconName: "hand-extended",
    backgroundColor: "#000000",
    icon: IconSvg.IconMentor({}),
    href: SCREEN.CONTAINER.HOME.MENTOR.INDEX,
  }
]
