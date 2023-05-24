import * as NavigationBar from "expo-navigation-bar";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { useColorScheme, Platform } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import getStyles from "./global/stlyles";
import DarkTheme from "./global/themes/DarkTheme";
import LightTheme from "./global/themes/LightTheme";
import Navigator from "./src/components/Navigator";
import { AuthProvider } from "./src/context/AuthContext";

function App() {
  const scheme = useColorScheme();

  if (Platform.OS === "android") {
    NavigationBar.setBackgroundColorAsync(
      scheme === "dark" ? DarkTheme.colors.background : LightTheme.colors.background,
    );
  }

  const styles = getStyles(scheme === "dark" ? DarkTheme : LightTheme);

  return (
    <AuthProvider>
      <SafeAreaProvider>
        <StatusBar
          style="auto"
          backgroundColor={
            scheme === "dark" ? DarkTheme.colors.background : LightTheme.colors.background
          }
        />
        <SafeAreaView style={styles.container}>
          <Navigator />
        </SafeAreaView>
      </SafeAreaProvider>
    </AuthProvider>
  );
}

export default App;
