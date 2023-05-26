import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import useAuth from "../hooks/useAuth";

const ChatHeader = () => {
  const theme = useTheme();
  const styles = getStyles(theme);
  const { logout } = useAuth();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={logout}>
        <Ionicons name="chevron-back" size={25} color={theme.colors.text} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.info}>
        <Ionicons name="person-circle-outline" size={40} color={theme.colors.text} />
        <Text style={styles.text}>Robertinho</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Ionicons name="ellipsis-vertical" size={25} color={theme.colors.text} />
      </TouchableOpacity>
    </View>
  );
};

const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      width: "100%",
      padding: 10,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      gap: 5,
      backgroundColor: theme.colors.secondary,
    },
    info: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      gap: 10,
    },
    text: {
      fontSize: 18,
      fontWeight: "500",
      color: theme.colors.text,
    },
  });

export default ChatHeader;
