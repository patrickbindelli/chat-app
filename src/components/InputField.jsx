import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const InputField = ({
  label = "Label",
  placeholder = "Lorem ipsum",
  icon = "alarm-outline",
  keyboardType = "default",
  value,
  secureTextEntry = false,
}) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  const [isFocused, setIsFocused] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(secureTextEntry);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  const handlePasswordVisible = () => setPasswordVisible(!passwordVisible);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{label}</Text>
      <View style={styles.innerContainer}>
        <View style={styles.inputContainer}>
          <Ionicons name={icon} size={20} color={theme.colors.text} />
          <TextInput
            value={value}
            secureTextEntry={passwordVisible}
            keyboardType={keyboardType}
            style={styles.inputField}
            placeholder={placeholder}
            placeholderTextColor={theme.colors.grayText}
            cursorColor={theme.colors.primary}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          {secureTextEntry && (
            <TouchableOpacity onPress={handlePasswordVisible}>
              {passwordVisible ? (
                <Ionicons name="md-eye-off-outline" size={20} color={theme.colors.text} />
              ) : (
                <Ionicons name="md-eye-outline" size={20} color={theme.colors.text} />
              )}
            </TouchableOpacity>
          )}
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
      flex: 1,
      height: 30,
      color: theme.colors.primary,
      fontSize: 15,
    },
    text: {
      fontSize: 15,
      fontWeight: "regular",
      color: theme.colors.text,
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
