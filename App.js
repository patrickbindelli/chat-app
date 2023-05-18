import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as NavigationBar from "expo-navigation-bar";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { useColorScheme } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import getStyles from "./global/stlyles";
import DarkTheme from "./global/themes/DarkTheme";
import LightTheme from "./global/themes/LightTheme";
import HomeScreen from "./src/pages/HomeScreen";
import LoginPage from "./src/pages/LoginPage";
import SignupPage from "./src/pages/SignupPage";
const Stack = createNativeStackNavigator();

function App() {
  const scheme = useColorScheme();
  NavigationBar.setBackgroundColorAsync(scheme === "dark" ? "black" : "white");

  const styles = getStyles(scheme === "dark" ? DarkTheme : LightTheme);

  return (
    <>
      <SafeAreaProvider>
        <StatusBar
          style="auto"
          backgroundColor={
            scheme === "dark" ? DarkTheme.colors.background : LightTheme.colors.background
          }
        />
        <SafeAreaView style={styles.container}>
          <NavigationContainer theme={scheme === "dark" ? DarkTheme : LightTheme}>
            <Stack.Navigator
              initialRouteName="Home"
              screenOptions={{
                statusBarAnimation: "slide",
                headerShown: false,
                animation: "slide_from_right",
              }}
            >
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Login" component={LoginPage} />
              <Stack.Screen name="Signup" component={SignupPage} />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}

export default App;
