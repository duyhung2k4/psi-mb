import { useNavigation } from "@react-navigation/native";

export const useAppNavigate = () => {
  const navigate = useNavigation<any>();
  return navigate;
}