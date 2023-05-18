import { useTheme } from "@react-navigation/native";
import React from "react";
import { KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Button from "../components/Button";
import InputField from "../components/InputField";

const LoginPage = ({ navigation }) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  const goToSignUp = () => {
    navigation.navigate("Signup");
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="height" style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Login</Text>
          <Text style={styles.text}>Bem vindo de volta!</Text>
        </View>
        <View style={styles.content}>
          <InputField label="Email" placeholder="example@email.com" icon="mail-outline" />
          <InputField label="Senha" placeholder="********" icon="lock-closed-outline" />
        </View>
        <View style={styles.buttonsContainer}>
          <Button title="Login" onPress={() => {}} />
          <Text style={styles.primaryText}>Esqueceu a senha?</Text>
        </View>
      </KeyboardAvoidingView>

      <View style={styles.bottomTextContainer}>
        <Text style={styles.text}>Ainda nao possui uma conta?</Text>
        <TouchableOpacity onPress={goToSignUp}>
          <Text style={styles.primaryText}>Cadastre-se aqui</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 5,
      justifyContent: "space-around",
    },
    titleContainer: {
      gap: 10,
      alignItems: "center",
      justifyContent: "center",
    },
    content: {
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      gap: 10,
    },
    buttonsContainer: {
      gap: 20,
      alignItems: "center",
      justifyContent: "center",
      paddingBottom: 10,
    },
    bottomTextContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    title: {
      color: theme.colors.text,
      textAlign: "center",
      fontSize: 24,
    },
    text: {
      color: theme.colors.text,
      textAlign: "center",
      fontSize: 15,
    },
    primaryText: {
      color: theme.colors.primary,
      textAlign: "center",
      fontSize: 15,
    },
  });

export default LoginPage;
