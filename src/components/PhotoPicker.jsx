import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View, Image } from "react-native";

export const PhotoPicker = ({ image, setImage }) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  const handlePickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted) {
      const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        quality: 1,
        base64: false,
      });

      if (!result.canceled) {
        setImage(result.assets[0].uri);
        //setBase64(result.assets[0].base64);
      }
    }
  };

  return (
    <TouchableOpacity onPress={handlePickImage}>
      <View style={styles.container}>
        {image ? (
          <Image source={{ uri: image }} style={styles.image} />
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
  });
