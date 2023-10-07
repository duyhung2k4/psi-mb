import { useNavigation } from "@react-navigation/native";

export type MethodNavigate = {
  
}

export const useAppNavigate = () => {
  const navigation = useNavigation<any>();
  return {
    navigate: (screen: string, params?: Record<string, any>) => navigation.navigate(screen, {...params}),
    goBack: () => navigation.goBack(),
  };
}