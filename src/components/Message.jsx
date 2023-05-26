import { useTheme } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Message = ({ text, user = false }) => {
  const theme = useTheme();
  const styles = getStyles(theme, user);

  return (
    <View style={styles.container}>
      <View style={styles.messsage}>
        <Text style={styles.text}>{text}</Text>
      </View>
      <View style={styles.timeContainer}>
        <Text style={styles.timeText}>20:27</Text>
      </View>
    </View>
  );
};

const getStyles = (theme, user) =>
  StyleSheet.create({
    container: {
      width: "100%",
      justifyContent: "center",
      alignItems: user ? "flex-end" : "flex-start",

      gap: 5,
    },
    messsage: {
      justifyContent: "center",
      alignItems: user ? "flex-end" : "flex-start",
      backgroundColor: user ? theme.colors.primary : theme.colors.secondary,
      padding: 10,
      borderRadius: 10,
      maxWidth: "80%",
    },
    text: {
      fontSize: 15,
      fontWeight: "600",
      color: user ? "white" : theme.colors.text,
    },
    timeContainer: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-end",
      paddingHorizontal: 5,
    },
    timeText: {
      fontSize: 12,
      color: theme.colors.grayText,
    },
  });

export default Message;
