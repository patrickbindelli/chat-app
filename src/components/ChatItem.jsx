import { useTheme } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const ChatItem = ({ onPress, data }) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        source={{
          uri: data.avatar,
        }}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{data.nome}</Text>
        <View style={styles.separator} />
      </View>
    </TouchableOpacity>
  );
};

const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
    },
    textContainer: {
      flex: 1,
      flexDirection: "column",
      gap: 3,
      overflow: "hidden",
    },
    image: {
      width: 50,
      height: 50,
      borderRadius: 50 / 2,
    },
    separator: {
      width: "100%",
      height: 1,
      backgroundColor: theme.colors.border,
      marginTop: 5,
    },
    text: {
      fontSize: 18,
      fontWeight: "bold",
      color: theme.colors.text,
    },
    messageText: {
      fontSize: 15,
      fontWeight: "regular",
      color: theme.colors.text,
    },
  });

export default ChatItem;