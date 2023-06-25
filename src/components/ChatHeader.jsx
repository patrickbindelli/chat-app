import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ChatHeader = ({ data, onPress }) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Ionicons name="chevron-back" size={25} color={theme.colors.text} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.info}>
        {data ? (
          <Image source={{ uri: data.avatar }} style={styles.image} />
        ) : (
          <Ionicons name="person-circle-outline" size={40} color={theme.colors.text} />
        )}
        <Text style={styles.text}>{data ? data.nome : "Robertinho"}</Text>
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
    image: {
      width: 40,
      height: 40,
      borderRadius: 40 / 2,

      borderWidth: 1,
    },
  });

export default ChatHeader;
