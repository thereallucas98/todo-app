import { StyleSheet } from "react-native";

export const inputStyles = StyleSheet.create({
  inputWrapper: {
    flexDirection: "row",
  },
  input: {
    flex: 1,
    height: 54,
    marginRight: 4,

    backgroundColor: "#262626",
    borderRadius: 6,

    padding: 16,

    color: "#FFF",
    fontSize: 16,
    fontWeight: "400",
    fontFamily: "Inter_400Regular",
  },
  addButton: {
    height: 52,
    width: 52,

    backgroundColor: "#1E6F9F",
    alignItems: "center",
    justifyContent: "center",

    borderRadius: 6,
  },
  descriptionLengthWrapper: {
    marginTop: 12,
    alignItems: "flex-end",
  },
  descriptionLength: {
    fontSize: 14,
    fontFamily: "Inter_500Medium",

    color: "#FFF",
  },
});
