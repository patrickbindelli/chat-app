import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

export const ChatInput = () => {
  const theme = useTheme();
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.chatInput}>
        <Ionicons name="happy-outline" size={24} color={theme.colors.icons} />
        <TextInput style={styles.textInput} />
        <Ionicons name="send-sharp" size={24} color={theme.colors.icons} />
      </View>
    </View>
  );
};

const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      width: "100%",
      padding: 10,
    },
    chatInput: {
      width: "100%",
      flexDirection: "row",
      backgroundColor: theme.colors.secondary,
      alignContent: "center",
      justifyContent: "center",
      gap: 10,
      borderRadius: 50,
      padding: 10,
    },
    textInput: {
      flex: 1,
      color: theme.colors.text,
      fontSize: 15,
    },
    text: {
      color: theme.colors.text,
      textAlign: "center",
      fontSize: 15,
    },
  });

export default ChatInput;
