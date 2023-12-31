// Icon for card screen home
import IconCourse from "./icon/course.svg";
import IconUniversity from "./icon/university.svg";
import IconJob from "./icon/job.svg";
import IconCamping from "./icon/camping.svg";
import IconMentor from "./icon/mentor.svg";

// Icon for bottom tabs
import IconHome from "./icon/home.svg";
import IconPost from "./icon/post.svg";
import IconStudy from "./icon/study.svg";
import IconAccount from "./icon/account.svg";

// Icon Type Course
import IconSkill from "./icon/skill.svg";
import IconDesk from "./icon/desk.svg";
import IconDepartment from "./icon/department.svg";
import IconLanguage from "./icon/language.svg";

// Alert
import IconSuccess from "./icon/success.svg";
import IconWarning from "./icon/warning.svg";
import IconError from "./icon/error.svg";

import { IconPropsSvg } from "./icon/props";

// creator course
import IconCourseCreator from "./icon/course-creator.svg";
import IconStudentCreator from "./icon/student-creator.svg";


// any
import IconCalendar from "./icon/calendar.svg";
import IconFolderPlus from "./icon/folderPlus.svg";

export const IconSvg = {
  IconCourse: (props: IconPropsSvg) => IconCourse({ height: props.height || 70, width: props.width || 70 }),
  IconUniversity: (props: IconPropsSvg) => IconUniversity({ height: props.height || 70, width: props.width || 70 }),
  IconJob: (props: IconPropsSvg) => IconJob({ height: props.height || 70, width: props.width || 70 }),
  IconCamping: (props: IconPropsSvg) => IconCamping({ height: props.height || 70, width: props.width || 70 }),
  IconMentor: (props: IconPropsSvg) => IconMentor({ height: props.height || 70, width: props.width || 70 }),

  IconHome: (props: IconPropsSvg) => IconHome({ height: props.height || 70, width: props.width || 70 }),
  IconPost: (props: IconPropsSvg) => IconPost({ height: props.height || 70, width: props.width || 70 }),
  IconStudy: (props: IconPropsSvg) => IconStudy({ height: props.height || 70, width: props.width || 70 }),
  IconAccount: (props: IconPropsSvg) => IconAccount({ height: props.height || 70, width: props.width || 70 }),

  IconSkill: (props: IconPropsSvg) => IconSkill({ height: props.height || 70, width: props.width || 70 }),
  IconDesk: (props: IconPropsSvg) => IconDesk({ height: props.height || 70, width: props.width || 70 }),
  IconDepartment: (props: IconPropsSvg) => IconDepartment({ height: props.height || 70, width: props.width || 70 }),
  IconLanguage: (props: IconPropsSvg) => IconLanguage({ height: props.height || 70, width: props.width || 70 }),

  IconSuccess: (props: IconPropsSvg) => IconSuccess({ height: props.height || 70, width: props.width || 70 }),
  IconWarning: (props: IconPropsSvg) => IconWarning({ height: props.height || 70, width: props.width || 70 }),
  IconError: (props: IconPropsSvg) => IconError({ height: props.height || 70, width: props.width || 70 }),

  // Creator
  IconCourseCreator: (props: IconPropsSvg) => IconCourseCreator({ height: props.height || 70, width: props.width || 70 }),
  IconStudentCreator: (props: IconPropsSvg) => IconStudentCreator({ height: props.height || 70, width: props.width || 70 }),


  // Any
  IconCalendar: (props: IconPropsSvg) => IconCalendar({ height: props.height || 70, width: props.width || 70 }),
  IconFolderPlus: (props: IconPropsSvg) => IconFolderPlus({ height: props.height || 70, width: props.width || 70 }),
}