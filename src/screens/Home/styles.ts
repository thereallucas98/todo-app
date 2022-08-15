import { StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
  },
  header: {
    height: 173,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#0D0D0D",
    flexDirection: "row",

    padding: 24,
  },
  flags: {
    flexDirection: "row",
  },
  flagButton: {
    marginRight: 12,
  },
  flagButtonActive: {
    borderColor: "#4EA8DE",
    borderWidth: 2,
  },
  body: {
    marginTop: -50,
    padding: 24,
  },
  infoWrapper: {
    width: "100%",
    marginTop: 32,
    paddingBottom: 20,

    flexDirection: "row",
    justifyContent: "space-between",

    borderBottomColor: "#333333",
    borderBottomWidth: 1,
  },
  todos: {
    marginTop: 32,
    alignItems: "center",
  },
  infoText: {
    fontSize: 14,
    fontFamily: "Inter_700Bold",

    color: "#808080",
  },
  infoTextRegular: {
    fontWeight: "400",
    marginTop: 16,
  },
  infoTextBold: {
    fontWeight: "700",
  },
});
