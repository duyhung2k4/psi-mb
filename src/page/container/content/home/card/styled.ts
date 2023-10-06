import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  root: {
    width: "100%",
    height: 150,
    borderRadius: 8,
    padding: 20,
  },

  content: {
    height: "100%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
  },

  icon: {
    height: "100%",
    flex: 1,
    borderRadius: 8,
  },

  title: {
    height: "100%",
    flex: 3,
  }
})