import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { KeyboardAvoidingView } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import styles from "./global/stlyles";
import HomeScreen from "./src/pages/HomeScreen";
const Stack = createNativeStackNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView style={styles.container}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
