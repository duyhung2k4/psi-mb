import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  scrollView: {
    height: "100%",
    width: "100%",
  },
  header: {
    height: 150 + 20,
    width: "100%",
    backgroundColor: "#5BB790",
    marginBottom: -20,
    padding: 40
  },
  form: {
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: Dimensions.get("window").height - 150,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingLeft: 30,
    paddingTop: 50,
    paddingRight: 30,
    paddingBottom: 10
  }
})