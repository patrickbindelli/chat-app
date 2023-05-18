import { useTheme } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

export const Button = ({ title = "Button", onPress, primary = true }) => {
  const theme = useTheme();
  const styles = getStyles(theme, primary);

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const getStyles = (theme, primary) =>
  StyleSheet.create({
    button: {
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 50,
      width: 200,
      height: 50,

      backgroundColor: primary ? theme.colors.primary : theme.colors.secondary,

      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,

      elevation: 4,
    },

    text: {
      fontSize: 15,
      fontWeight: "regular",
      color: theme.colors.text,
    },
  });

export default Button;
