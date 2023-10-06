import React from "react";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppRouter from "./routers";

const Main: React.FC = () => {
  return (
    <SafeAreaProvider>
      <AppRouter />
    </SafeAreaProvider>
  )
}

export default Main;