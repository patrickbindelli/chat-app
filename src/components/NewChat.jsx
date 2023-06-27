import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

const NewChat = ({ onPress }) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Ionicons name="chatbox" size={25} color={theme.colors.text} />
    </TouchableOpacity>
  );
};

const getStyles = (theme) =>
  StyleSheet.create({
    button: {
      alignItems: "center",
      justifyContent: "center",
      padding: 15,
      margin: 20,

      position: "absolute",
      bottom: 0,
      right: 0,
      borderRadius: 200,

      backgroundColor: theme.colors.primary,
    },
    text: {
      fontSize: 15,
      fontWeight: "regular",
      color: theme.colors.text,
    },
  });

export default NewChat;
