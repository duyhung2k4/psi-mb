import { useNavigation } from "@react-navigation/native";

export const useAppNavigate = () => {
  const navigation = useNavigation<any>();
  return {
    navigate: (screen: string) => navigation.navigate(screen)
  };
}