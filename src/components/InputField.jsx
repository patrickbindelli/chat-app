import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { MaskedTextInput } from "react-native-mask-text";

const InputField = ({
  label = "Label",
  placeholder = "Lorem ipsum",
  icon = "alarm-outline",
  keyboardType = "default",
  value,
  onChangeText,
  secureTextEntry = false,
  error = false,
  mask,
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
      <View style={styles.labelContainer}>
        <Text style={error ? styles.errorText : styles.text}>{label}</Text>
        {error && <Text style={styles.requiredText}>* campo obrigatório</Text>}
      </View>
      <View style={styles.innerContainer}>
        <View style={styles.inputContainer}>
          <Ionicons
            name={icon}
            size={20}
            color={error ? theme.colors.notification : theme.colors.text}
          />
          {mask ? (
            <MaskedTextInput
              mask={mask}
              value={value}
              onChangeText={(maskedValue, rawValue) => {
                onChangeText(rawValue);
              }}
              secureTextEntry={passwordVisible}
              keyboardType={keyboardType}
              style={styles.inputField}
              placeholder={placeholder}
              placeholderTextColor={theme.colors.grayText}
              cursorColor={theme.colors.primary}
              onFocus={handleFocus}
              onBlur={handleBlur}
              autoComplete="off"
            />
          ) : (
            <TextInput
              value={value}
              onChangeText={onChangeText}
              secureTextEntry={passwordVisible}
              keyboardType={keyboardType}
              style={styles.inputField}
              placeholder={placeholder}
              placeholderTextColor={theme.colors.grayText}
              cursorColor={theme.colors.primary}
              onFocus={handleFocus}
              onBlur={handleBlur}
              autoComplete="username"
              importantForAutofill="no"
            />
          )}
          {secureTextEntry && (
            <TouchableOpacity onPress={handlePasswordVisible}>
              {passwordVisible ? (
                <Ionicons
                  name="md-eye-off-outline"
                  size={20}
                  color={error ? theme.colors.notification : theme.colors.text}
                />
              ) : (
                <Ionicons
                  name="md-eye-outline"
                  size={20}
                  color={error ? theme.colors.notification : theme.colors.text}
                />
              )}
            </TouchableOpacity>
          )}
        </View>
        {!error && <View style={isFocused ? styles.activeSeparator : styles.separator} />}
        {error && <View style={styles.errorSeparator} />}
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
    errorText: {
      fontSize: 15,
      fontWeight: "regular",
      color: theme.colors.notification,
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
    errorSeparator: {
      height: 1,
      width: "100%",
      backgroundColor: theme.colors.notification,
    },
    labelContainer: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      gap: 5,
    },
    requiredText: {
      fontSize: 10,
      fontWeight: "regular",
      color: theme.colors.notification,
    },
  });

export default InputField;
