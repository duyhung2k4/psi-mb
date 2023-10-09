import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  root: {
    width: "100%",
    minHeight: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#C9C9C9",
    borderColor: "#FFFFFF",
  },

  simple: {
    borderRadius: 8,
  },

  top: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomWidth: 2,
  },
  center: {
    borderBottomWidth: 2,
  },
  bottom: {
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  }
})