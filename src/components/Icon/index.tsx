import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type NameIcon = "home" | "post" | "lead-pencil" | "account";
interface IconProps {
  name: NameIcon
  size?: number
  color?: string
}
const Icon: React.FC<IconProps> = (props) => {
  return (
    <MaterialCommunityIcons
      name={props.name}
      size={props.size || 24}
      color={props.color || "gray"}
    />
  )
}

export default Icon;