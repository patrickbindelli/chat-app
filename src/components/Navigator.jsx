import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useColorScheme } from "react-native";

import DarkTheme from "../../global/themes/DarkTheme";
import LightTheme from "../../global/themes/LightTheme";
import useAuth from "../hooks/useAuth";
import ChatList from "../pages/ChatList";
import ChatPage from "../pages/ChatPage";
import HomeScreen from "../pages/HomeScreen";
import LoginPage from "../pages/LoginPage";
import PhotoSignupPage from "../pages/PhotoSignupPage";
import SignupPage from "../pages/SignupPage";

const Stack = createNativeStackNavigator();

const Navigator = () => {
  const scheme = useColorScheme();
  const { authenticated, loading } = useAuth();

  return (
    <NavigationContainer theme={scheme === "dark" ? DarkTheme : LightTheme}>
      <Stack.Navigator
        initialRouteName={authenticated && !loading ? "ChatList" : "Home"}
        screenOptions={{
          statusBarAnimation: "slide",
          headerShown: false,
          animation: "slide_from_right",
        }}
      >
        {authenticated && !loading ? (
          <>
            <Stack.Screen name="ChatList" component={ChatList} />
            <Stack.Screen name="Chat" component={ChatPage} />
          </>
        ) : (
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Login" component={LoginPage} />
            <Stack.Screen name="Signup" component={SignupPage} />
            <Stack.Screen name="PhotoSignup" component={PhotoSignupPage} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
