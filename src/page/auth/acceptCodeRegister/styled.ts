import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  root: {
    flex: 1, 
    padding: 20,
  },
  title: {
    textAlign: 'center', 
    fontSize: 30
  },
  codeFieldRoot: {
    marginTop: 20,
  },
  cell: {
    width: 50,
    height: 60,
    lineHeight: 38,
    fontSize: 24,
    borderRadius: 8,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: "#EDEDED",
    textAlign: 'center',
    textAlignVertical: "center"
  },
  focusCell: {
    borderColor: '#000',
  },
});