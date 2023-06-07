import { useTheme } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { KeyboardAvoidingView, ScrollView, StyleSheet } from "react-native";

import ChatHeader from "../components/ChatHeader";
import ChatInput from "../components/ChatInput";
import Message from "../components/Message";
import useAuth from "../hooks/useAuth";

export const ChatPage = () => {
  const theme = useTheme();
  const styles = getStyles(theme);

  const { userData } = useAuth();

  const mock = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius nunc consequat venenatis interdum. Fusce sed nisi sit amet ipsum tincidunt vestibulum in eu erat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Phasellus porta, est quis consectetur sodales, metus dui condimentum felis, ut accumsansem purus eu tellus. Vestibulum pulvinar volutpat ante. Nullam in rhoncus lectus. Ut atultricies arcu, quis tristique ante. Sed sed felis ut justo consequat ultrices.",
      user: true,
    },
    {
      text: "Concordo",
      user: false,
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius nunc consequat venenatis interdum. Fusce sed nisi sit amet ipsum tincidunt vestibulum in eu erat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Phasellus porta, est quis consectetur sodales, metus dui condimentum felis, ut accumsansem purus eu tellus. Vestibulum pulvinar volutpat ante. Nullam in rhoncus lectus. Ut atultricies arcu, quis tristique ante. Sed sed felis ut justo consequat ultrices.",
      user: true,
    },
    {
      text: "Concordo",
      user: false,
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius nunc consequat venenatis interdum. Fusce sed nisi sit amet ipsum tincidunt vestibulum in eu erat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Phasellus porta, est quis consectetur sodales, metus dui condimentum felis, ut accumsansem purus eu tellus. Vestibulum pulvinar volutpat ante. Nullam in rhoncus lectus. Ut atultricies arcu, quis tristique ante. Sed sed felis ut justo consequat ultrices.",
      user: true,
    },
    {
      text: "Concordo",
      user: false,
    },
  ];

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} contentContainerStyle={{ flex: 1 }}>
      <StatusBar style="auto" backgroundColor={theme.colors.secondary} />
      <ChatHeader data={userData} />
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.messagesContainer}
        endFillColor={theme.colors.primary}
        overScrollMode="never"
      >
        {mock.map((msg, index) => {
          return <Message key={index} text={msg.text} user={msg.user} />;
        })}
      </ScrollView>
      <ChatInput />
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
