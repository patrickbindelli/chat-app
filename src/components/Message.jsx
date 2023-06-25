import { useTheme } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Message = ({ data, user = false }) => {
  const theme = useTheme();
  const styles = getStyles(theme, user);
  const date = new Date(data.dataHora);

  const hours = date.getHours();
  const minutes = date.getMinutes();

  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;

  return (
    <View style={styles.container}>
      <View style={styles.messsage}>
        <Text style={styles.text}>{data.mensagem}</Text>
      </View>
      <View style={styles.timeContainer}>
        <Text style={styles.timeText}>{formattedTime}</Text>
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
