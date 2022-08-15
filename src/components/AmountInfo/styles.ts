import { StyleSheet } from "react-native";

export const amountInfoStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Inter_700Bold",

    marginRight: 8,
  },
  labelCreated: {
    color: "#4EA8DE",
  },
  labelFinished: {
    color: "#8284FA",
  },
  cardWrapper: {
    height: 25,
    width: 25,
    backgroundColor: "#333333",
    borderRadius: 10,

    alignItems: "center",
    justifyContent: "center",
  },
  cardValue: {
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Inter_700Bold",
    color: "#FFF",
  },
});
