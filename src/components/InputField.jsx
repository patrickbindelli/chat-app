import { useTheme } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const InputField = ({ label = "Label", placeholder = "Lorem ipsum", icon = "alarm-outline" }) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{label}</Text>
      <View style={styles.innerContainer}>
        <View style={styles.inputContainer}>
          <Ionicons name={icon} size={20} color={theme.colors.grayText} />
          <TextInput
            style={styles.inputField}
            placeholder={placeholder}
            placeholderTextColor={theme.colors.lowContrastText}
            cursorColor={theme.colors.primary}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </View>
        <View style={isFocused ? styles.activeSeparator : styles.separator} />
      </View>
    </View>
  );
};

const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      width: "100%",
      alignItems: "flex-start",
      justifyContent: "center",
      paddingHorizontal: 20,
    },
    innerContainer: {
      width: "100%",
      flexDirection: "column",
      gap: 5,
    },
    inputContainer: {
      width: "100%",
      alignItems: "center",
      flexDirection: "row",
      gap: 10,
    },
    inputField: {
      width: "100%",
      height: 30,
      color: theme.colors.primary,
      fontSize: 15,
    },
    text: {
      fontSize: 15,
      fontWeight: "regular",
      color: theme.colors.grayText,
    },
    separator: {
      height: 1,
      width: "100%",
      backgroundColor: theme.colors.border,
    },
    activeSeparator: {
      height: 1,
      width: "100%",
      backgroundColor: theme.colors.primary,
    },
  });

export default InputField;
