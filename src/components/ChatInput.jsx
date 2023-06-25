import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import React from "react";
import { ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

export const ChatInput = ({ value, onChangeText, onPress }) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.chatInput}>
        <ScrollView overScrollMode="never">
          <TextInput
            value={value}
            onChangeText={onChangeText}
            style={styles.textInput}
            onSubmitEditing={onPress}
            multiline
          />
        </ScrollView>
        <TouchableOpacity style={styles.sendIcon} onPress={onPress}>
          <Ionicons name="send-sharp" size={24} color={theme.colors.icons} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      width: "100%",
      padding: 10,
    },
    chatInput: {
      width: "100%",
      flexDirection: "row",
      backgroundColor: theme.colors.secondary,
      alignContent: "flex-end",
      justifyContent: "center",
      gap: 10,
      borderRadius: 30,
      paddingVertical: 10,
      paddingHorizontal: 20,
      maxHeight: 100,
      overflow: "scroll",
    },
    textInput: {
      flex: 1,
      color: theme.colors.text,
      fontSize: 15,
    },
    sendIcon: {
      flexDirection: "row",
      alignItems: "flex-end",
    },
    text: {
      color: theme.colors.text,
      textAlign: "center",
      fontSize: 15,
    },
  });

export default ChatInput;
