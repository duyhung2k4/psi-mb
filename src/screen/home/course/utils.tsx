import { IconSvg } from "../../../assets/export"
import { TypeCourseCardProps } from "../../../components/TypeCourseCard"
import { SCREEN } from "../../../constants/router"

export const listTypeCouse: TypeCourseCardProps[] = [
  {
    title: "Ôn thi 12",
    color: "#DDC6C6",
    screen: SCREEN.CONTAINER.HOME.COURSE.PRACTICE.INDEX,
    icon: IconSvg.IconDesk({}),
  },
  {
    title: "Ngành học",
    color: "#22D0D6",
    screen: SCREEN.CONTAINER.HOME.COURSE.MAJOR.INDEX,
    icon: IconSvg.IconDepartment({}),
  },
  {
    title: "Ngoại ngữ",
    color: "#C1C1C1",
    screen: SCREEN.CONTAINER.HOME.COURSE.LAGUAGE.INDEX,
    icon: IconSvg.IconLanguage({}),
  },
  {
    title: "Kĩ năng",
    color: "#000000",
    screen: SCREEN.CONTAINER.HOME.COURSE.SKILL.INDEX,
    icon: IconSvg.IconSkill({}),
  },
]