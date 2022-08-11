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
    justifyContent: "center",
    backgroundColor: "#0D0D0D",
  },
  body: {
    marginTop: -50,
    padding: 24,
  },
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
    alignItems: 'flex-end',
  },
  descriptionLength: {
    fontSize: 14,
    fontFamily: "Inter_500Medium",

    color: "#FFF",
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
