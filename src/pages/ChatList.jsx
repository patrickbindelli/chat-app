import { useTheme } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import * as api from "../api/message";
import ChatItem from "../components/ChatItem";
import useAuth from "../hooks/useAuth";

const ChatList = ({ navigation }) => {
  const theme = useTheme();
  const styles = getStyles(theme);
  const { logout, userData } = useAuth();

  const [data, setData] = useState([]);

  const getMessagesData = async () => {
    const messages = await api.getUsersWithMessages(userData.id);
    setData(messages);
  };

  useEffect(() => {
    if (userData) {
      getMessagesData();

      const interval = setInterval(() => {
        getMessagesData();
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [userData]);

  const handleGoToMessage = (user) => {
    navigation.navigate("Chat", { user });
  };

  return (
    <>
      <StatusBar style="auto" backgroundColor={theme.colors.secondary} />
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Mensagens</Text>
          <TouchableOpacity onPress={logout}>
            <Text style={styles.text}>Sair</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={{ width: "100%" }} contentContainerStyle={styles.scrollView}>
          {data.map((user, index) => {
            return <ChatItem key={index} data={user} onPress={() => handleGoToMessage(user)} />;
          })}
        </ScrollView>
      </View>
    </>
  );
};

const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    scrollView: {
      flexDirection: "column",
      alignItems: "center",
      padding: 10,
      gap: 10,
    },
    header: {
      backgroundColor: theme.colors.secondary,
      width: "100%",
      padding: 10,
      flexDirection: "row",
      alignContent: "center",
      justifyContent: "space-between",
    },
    messagesContainer: {
      padding: 10,
      gap: 10,
    },
    chatItem: {
      width: "100%",
      height: 50,
      backgroundColor: "red",
    },
    headerText: {
      color: "white",
      fontSize: 20,
    },
    text: {
      color: "white",
      fontSize: 15,
    },
  });

export default ChatList;
