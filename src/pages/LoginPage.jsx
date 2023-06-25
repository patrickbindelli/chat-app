import { useTheme } from "@react-navigation/native";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Button from "../components/Button";
import InputField from "../components/InputField";
import LoadingModal from "../components/LoadingModal";
import useAuth from "../hooks/useAuth";

const LoginPage = ({ navigation }) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  const { login, loading, loginError } = useAuth();

  const goToSignUp = () => {
    navigation.navigate("Signup");
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",

    defaultValues: {
      login: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    login(data.login, data.password);
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="height" style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Login</Text>
          <Text style={styles.text}>Bem vindo de volta!</Text>
        </View>

        <View style={styles.content}>
          <Controller
            name="login"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputField
                mask="(99) 99999-9999"
                label="Telefone"
                placeholder="(22) 99999-9999"
                icon="phone-portrait-outline"
                keyboardType="numeric"
                onChangeText={onChange}
                value={value}
                error={errors.login}
              />
            )}
          />

          <Controller
            name="password"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputField
                label="Senha"
                placeholder="********"
                icon="lock-closed-outline"
                onChangeText={onChange}
                value={value}
                error={errors.password}
                secureTextEntry
                keyboardType="visible-password"
              />
            )}
          />
          <Text style={styles.errorText}>{loginError}</Text>
        </View>

        <View style={styles.buttonsContainer}>
          <Button title="Login" onPress={handleSubmit(onSubmit)} />
          <Text style={styles.primaryText}>Esqueceu a senha?</Text>
        </View>
      </KeyboardAvoidingView>

      <View style={styles.bottomTextContainer}>
        <Text style={styles.text}>Ainda nao possui uma conta?</Text>
        <TouchableOpacity onPress={goToSignUp}>
          <Text style={styles.primaryText}>Cadastre-se aqui</Text>
        </TouchableOpacity>
      </View>

      <LoadingModal open={loading} />
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
    errorText: {
      color: theme.colors.notification,
      textAlign: "center",
      fontSize: 15,
    },
  });

export default LoginPage;
