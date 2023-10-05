import IconCourse from "./icon/course.svg";
import IconUniversity from "./icon/university.svg";
import IconJob from "./icon/job.svg";
import IconCamping from "./icon/camping.svg";

import { IconPropsSvg } from "./icon/props";

export const IconSvg = {
  IconCourse: (props: IconPropsSvg) => IconCourse({ height: props.height || 70, width: props.width || 70 }),
  IconUniversity: (props: IconPropsSvg) => IconUniversity({ height: props.height || 70, width: props.width || 70 }),
  IconJob: (props: IconPropsSvg) => IconJob({ height: props.height || 70, width: props.width || 70 }),
  IconCamping: (props: IconPropsSvg) => IconCamping({ height: props.height || 70, width: props.width || 70 }),
}