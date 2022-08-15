import { StyleSheet } from "react-native";

export const todoStyles = StyleSheet.create({
  container: {
    height: 64,

    marginTop: 8,
    paddingHorizontal: 12,

    borderRadius: 8,
    borderColor: "#333333",
    borderWidth: 1,
    backgroundColor: "#262626",

    shadowColor: "#000000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  buttonWrapper: {
    width: 42,
  },
  leftButton: {
    width: 24,
    height: 24,

    borderRadius: 24,
    borderWidth: 2,
    borderColor: "#4EA8DE",
  },
  leftButtonActived: {
    borderWidth: 1,
    backgroundColor: "#5E60CE",
    borderColor: "#5E60CE",

    alignItems: "center",
    justifyContent: "center",
  },
  textWrapper: {
    width: "75%",
    justifyContent: "center",
  },
  description: {
    fontSize: 14,
    fontWeight: "400",
    fontFamily: "Inter_400Regular",
    color: "#F2F2F2",
  },
  descriptionActived: {
    textDecorationLine: "line-through",
    color: "#808080",
  },
  rightButton: {
    alignItems: "center",
    justifyContent: "center",
  },
});
