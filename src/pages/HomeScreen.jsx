import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Button from "../components/Button";

const HomeScreen = ({ navigation }) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  const gotToLogin = () => {
    navigation.navigate("Login");
  };

  const goToSignUp = () => {
    navigation.navigate("Signup");
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Bem-Vindo</Text>
        <Text style={styles.text}>Para começar, realize o login ou cadastre-se</Text>
      </View>
      <View style={styles.iconContainer}>
        <Ionicons name="md-chatbubbles-outline" size={200} color={theme.colors.primary} />
      </View>
      <View style={styles.buttonsContainer}>
        <Button title="Cadastrar-se" onPress={goToSignUp} />
        <Button title="Login" primary={false} onPress={gotToLogin} />
      </View>
    </View>
  );
};

const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      alignItems: "center",
      justifyContent: "space-around",
    },
    titleContainer: {
      gap: 10,
      alignItems: "center",
      justifyContent: "center",
    },
    iconContainer: {
      alignItems: "center",
      justifyContent: "center",
    },
    buttonsContainer: {
      gap: 20,
      alignItems: "center",
      justifyContent: "center",
    },
    image: {
      height: 200,
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
  });

export default HomeScreen;
