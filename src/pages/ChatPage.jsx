import { useTheme } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../components/Button";
import useAuth from "../hooks/useAuth";

export const ChatPage = () => {
  const theme = useTheme();
  const styles = getStyles(theme);
  const { logout } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Mensagens</Text>
      <Button title="Logout" onPress={logout} />
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
    text: {
      color: theme.colors.text,
      textAlign: "center",
      fontSize: 15,
    },
  });

export default ChatPage;
