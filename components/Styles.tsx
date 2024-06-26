import { Platform, StatusBar, StyleSheet } from "react-native";

export const Styles = (checkedColor = "black") =>
  StyleSheet.create({
    androidSafeArea: {
      flex: 1,
      backgroundColor: "white",
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      paddingHorizontal: 30,
    },
    card: {
      borderStyle: "solid",
      borderRadius: 10,
      borderColor: "black",
      borderWidth: 4,
      marginBottom: 5,
    },
    row: {
      flexDirection: "row",
    },
    status: {
      height: "auto",
      paddingRight: 15,
      borderTopLeftRadius: 5,
      borderBottomLeftRadius: 5,
      backgroundColor: checkedColor,
    },
    text: {
      marginRight: 10,
      fontSize: 20,
    },
    center: {
      justifyContent: "center",
      alignItems: "center",
    },
    title: {
      fontSize: 25,
    },
    addTask: {
      flexDirection: "row",
      paddingBottom: 10,
      paddingTop: 10,
      alignItems: "center",
    },
  });
