import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  root: {
    width: "100%",
    height: "auto",
    shadowColor: '#000',
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 5,
    borderRadius: 8,
  },

  image: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: "gray",
    zIndex: 1,
  },

  bottom: {
    height: 120 + 8,
    width: "100%",
    borderRadius: 8,
    marginTop: -8,
    zIndex: 2,
    backgroundColor: "#FFFFFF",
    padding: 10,
    flexDirection: "column",
    justifyContent: "flex-end",
  },

  option: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },

  titlePrice: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
  }
})