import { useTheme } from "@react-navigation/native";
import React from "react";
import { KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Controller, useForm } from "react-hook-form";

import Button from "../components/Button";
import InputField from "../components/InputField";
import useAuth from "../hooks/useAuth";
import LoadingModal from "../components/LoadingModal";

const SignupPage = ({ navigation }) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  const { signup, loading } = useAuth();

  const goToLogin = () => {
    navigation.navigate("Login");
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",

    defaultValues: {
      nome: "",
      apelido: "",
      email: "",
      telefone: "",
      senha: "",
    },
  });

  const onSubmit = async (data) => {
    signup(data);
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="height" style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Cadastro</Text>
          <Text style={styles.text}>Precisamos saber mais sobre você!</Text>
        </View>

        <View style={styles.content}>
          <Controller
            name="nome"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputField
                label="Nome"
                placeholder="Rogerio da Silva"
                icon="person-outline"
                onChangeText={onChange}
                value={value}
                error={errors.nome}
              />
            )}
          />

          <Controller
            name="apelido"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputField
                label="Apelido"
                placeholder="Rogerinho"
                icon="md-chatbubble-ellipses-outline"
                onChangeText={onChange}
                value={value}
                error={errors.apelido}
              />
            )}
          />

          <Controller
            name="email"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputField
                label="Email"
                placeholder="example@email.com"
                icon="mail-outline"
                keyboardType="email-address"
                onChangeText={onChange}
                value={value}
                error={errors.email}
              />
            )}
          />

          <Controller
            name="telefone"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputField
                label="Telefone"
                placeholder="+55 (22) 99999-9999"
                icon="phone-portrait-outline"
                keyboardType="numeric"
                onChangeText={onChange}
                value={value}
                error={errors.telefone}
              />
            )}
          />

          <Controller
            name="senha"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputField
                label="Senha"
                placeholder="********"
                icon="lock-closed-outline"
                secureTextEntry
                onChangeText={onChange}
                value={value}
                error={errors.senha}
              />
            )}
          />
        </View>

        <View style={styles.buttonsContainer}>
          <Button title="Cadastrar-se" onPress={handleSubmit(onSubmit)} />
        </View>
      </KeyboardAvoidingView>
      <View style={styles.bottomTextContainer}>
        <Text style={styles.text}>Já tem uma conta?</Text>
        <TouchableOpacity onPress={goToLogin}>
          <Text style={styles.primaryText}>Faça Login</Text>
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
      paddingBottom: 20,
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

export default SignupPage;
