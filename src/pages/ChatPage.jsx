import { useTheme } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useRef, useState } from "react";
import { KeyboardAvoidingView, ScrollView, StyleSheet } from "react-native";

import * as api from "../api/message";
import ChatHeader from "../components/ChatHeader";
import ChatInput from "../components/ChatInput";
import Message from "../components/Message";
import useAuth from "../hooks/useAuth";

const UPDATE_INTERVAL = 1000;

const ChatPage = ({ route, navigation }) => {
  const { user } = route.params || {};
  const theme = useTheme();
  const styles = getStyles(theme);

  const { userData } = useAuth();

  const [data, setData] = useState([]);
  const [messageText, setMessageText] = useState("");

  const scrollRef = useRef(null);

  const handleAddMessageLocally = (text) => {
    const newMessage = {
      from: {
        ...userData,
      },
      to: {
        ...user,
      },
      mensagem: text,
      dataHora: new Date(),
    };

    delete newMessage.from.avatar;
    delete newMessage.to.avatar;

    data.push(newMessage);
  };

  const handleGetMessages = async () => {
    const messages = await api.getMessages(userData.id, user.id);

    console.log(messages);
    messages.sort((a, b) => a.dataHora.localeCompare(b.dataHora));
    setData(messages);
  };

  const handleSendMessage = async () => {
    handleAddMessageLocally(messageText);
    await api.sendMessage(userData.id, user.id, messageText);
    setMessageText("");
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    if (userData && user) {
      handleGetMessages();

      const interval = setInterval(() => {
        handleGetMessages();
      }, UPDATE_INTERVAL);

      return () => clearInterval(interval);
    }
  }, [userData, user]);

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} contentContainerStyle={{ flex: 1 }}>
      <StatusBar style="auto" backgroundColor={theme.colors.secondary} />
      <ChatHeader data={user} onPress={handleGoBack} />
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.messagesContainer}
        ref={scrollRef}
        onContentSizeChange={() => scrollRef.current.scrollToEnd({ animated: true })}
      >
        {data.map((message, index) => (
          <Message key={index} data={message} user={message.from.id === userData.id} />
        ))}
      </ScrollView>
      <ChatInput value={messageText} onChangeText={setMessageText} onPress={handleSendMessage} />
    </KeyboardAvoidingView>
  );
};

const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      backgroundColor: theme.colors.secondary,
      width: "100%",
      height: 40,
    },
    messagesContainer: {
      padding: 10,
      gap: 10,
    },
  });

export default ChatPage;
