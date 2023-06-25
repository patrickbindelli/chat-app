import { useTheme } from "@react-navigation/native";
import React, { useState } from "react";
import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";

import Button from "../components/Button";
import LoadingModal from "../components/LoadingModal";
import { PhotoPicker } from "../components/PhotoPicker";
import useAuth from "../hooks/useAuth";

const PhotoSignupPage = ({ route, navigation }) => {
  const { data } = route.params || {};
  const theme = useTheme();
  const styles = getStyles(theme);

  const { signup, loading } = useAuth();

  const goToSignUp = () => {
    navigation.goBack();
  };

  const [image, setImage] = useState();

  const onSubmit = () => {
    signup({ ...data, avatar: image ? "data:image/png;base64," + image.base64 : "" });
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="height" style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Cadastro</Text>
          <Text style={styles.text}>Gostaria de adicionar uma foto?</Text>
        </View>

        <View style={styles.content}>
          <PhotoPicker setImage={setImage} image={image} />
          <Text style={styles.title}>{data.nome}</Text>
        </View>

        <View style={styles.buttonsContainer}>
          <Button title="Continuar" onPress={onSubmit} />
          <Button primary={false} title="Voltar" onPress={goToSignUp} />
        </View>
      </KeyboardAvoidingView>

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
      paddingBottom: 10,
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

export default PhotoSignupPage;
