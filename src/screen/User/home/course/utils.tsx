import { IconSvg } from "../../../../assets/export";
import { TypeCourseCardProps } from "../../../../components/TypeCourseCard";


export const listTypeCouse: TypeCourseCardProps[] = [
  {
    title: "Ôn thi 12",
    color: "#DDC6C6",
    screen: "CourseHomePractice",
    icon: IconSvg.IconDesk({}),
  },
  {
    title: "Ngành học",
    color: "#22D0D6",
    screen: "CourseHomeMajor",
    icon: IconSvg.IconDepartment({}),
  },
  {
    title: "Ngoại ngữ",
    color: "#C1C1C1",
    screen: "CourseHomeLanguage",
    icon: IconSvg.IconLanguage({}),
  },
  {
    title: "Kĩ năng",
    color: "#000000",
    screen: "CourseHomeSkill",
    icon: IconSvg.IconSkill({}),
  },
]