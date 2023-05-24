import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  Easing,
  cancelAnimation,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  FadeIn,
  FadeOut,
} from "react-native-reanimated";

export const LoadingModal = ({ open }) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  const rotation = useSharedValue(0);

  const style = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotateZ: `${rotation.value}deg`,
        },
      ],
    };
  }, [rotation.value]);

  useEffect(() => {
    rotation.value = withRepeat(
      withTiming(360, {
        duration: 1000,
        easing: Easing.linear,
      }),
      -1,
    );
    return () => cancelAnimation(rotation);
  }, []);

  if (open)
    return (
      <>
        <StatusBar style="auto" backgroundColor={theme.colors.modal} />
        <Animated.View entering={FadeIn} exiting={FadeOut} style={styles.centeredView}>
          <Animated.View style={[styles.modalView, style]}>
            <Ionicons name="cafe-outline" size={30} color={theme.colors.text} />
          </Animated.View>
        </Animated.View>
      </>
    );
};

const getStyles = (theme, primary) =>
  StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.colors.modal,

      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
    modalView: {
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 150,
    },
  });

export default LoadingModal;
