import { useActionSheet } from "@expo/react-native-action-sheet";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

export const PhotoPicker = ({ image, setImage }) => {
  const theme = useTheme();
  const styles = getStyles(theme);
  const { showActionSheetWithOptions } = useActionSheet();

  const handleOptions = () => {
    const options = ["Abrir Câmera", "Selecionar Arquivo", "Cancelar"];
    const optionsWithImage = ["Abrir Câmera", "Selecionar Arquivo", "Remover Foto", "Cancelar"];
    const cancelButtonIndex = image ? 3 : 2;
    const cancelIconColor = theme.colors.notification;

    const handlePickImageFromCamera = async () => {
      const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

      if (permissionResult.granted) {
        const result = await ImagePicker.launchCameraAsync({
          allowsEditing: true,
          quality: 1,
          base64: true,
        });

        if (!result.canceled) {
          setImage(result.assets[0]);
        }
      }
    };

    const handlePickImage = async () => {
      const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (permissionResult.granted) {
        const result = await ImagePicker.launchImageLibraryAsync({
          allowsEditing: true,
          quality: 1,
          base64: true,
        });

        if (!result.canceled) {
          setImage(result.assets[0]);
        }
      }
    };

    const handleRemoveImage = () => {
      setImage(null);
    };

    showActionSheetWithOptions(
      {
        options: image ? optionsWithImage : options,
        cancelButtonIndex,
        cancelButtonTintColor: cancelIconColor,
        title: "Selecionar imagem",
        icons: image
          ? [
              <Ionicons name="camera" size={24} color={theme.colors.text} />,
              <Ionicons name="image" size={24} color={theme.colors.text} />,
              <Ionicons name="trash" size={24} color={theme.colors.text} />,
              <Ionicons name="close" size={24} color={theme.colors.notification} />,
            ]
          : [
              <Ionicons name="camera" size={24} color={theme.colors.text} />,
              <Ionicons name="image" size={24} color={theme.colors.text} />,
              <Ionicons name="close" size={24} color={theme.colors.notification} />,
            ],
        containerStyle: styles.actionSheet,
        textStyle: styles.text,
        titleTextStyle: styles.text,
      },
      (selectedIndex) => {
        if (image) {
          switch (selectedIndex) {
            case 0:
              handlePickImageFromCamera();
              break;
            case 1:
              handlePickImage();
              break;
            case 2:
              handleRemoveImage();
              break;
          }
        } else {
          switch (selectedIndex) {
            case 0:
              handlePickImageFromCamera();
              break;
            case 1:
              handlePickImage();
              break;
          }
        }
      },
    );
  };

  return (
    <TouchableOpacity onPress={handleOptions}>
      <View style={styles.container}>
        {image ? (
          <Image source={{ uri: image.uri }} style={styles.image} />
        ) : (
          <Ionicons name="add" size={40} color={theme.colors.lowContrastText} />
        )}
      </View>
    </TouchableOpacity>
  );
};

const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      width: 150,
      height: 150,
      borderRadius: 150 / 2,
      backgroundColor: theme.colors.secondary,
      alignItems: "center",
      justifyContent: "center",
    },
    image: {
      width: 150,
      height: 150,
      borderRadius: 150 / 2,

      borderWidth: 1,
    },
    actionSheet: {
      backgroundColor: theme.colors.secondary,
    },
    text: {
      color: theme.colors.text,
    },
  });
