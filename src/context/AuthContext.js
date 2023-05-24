import { SERVER_URL } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import * as SplashScreen from "expo-splash-screen";
import React, { createContext, useEffect, useState } from "react";

SplashScreen.preventAutoHideAsync();

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [checkingSession, setCheckingSession] = useState(true);
  const [error, setError] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);

  const checkIfValidSession = async () => {
    setCheckingSession(true);
    const loggedUserHash = await AsyncStorage.getItem("@logged_user_hash").then((data) =>
      JSON.parse(data),
    );
    const loggedUser = await AsyncStorage.getItem("@logged_user").then((data) => JSON.parse(data));

    if (!loggedUser || !loggedUserHash) {
      setAuthenticated(false);
      setCheckingSession(false);
      return;
    }

    await axios
      .get(`${SERVER_URL}/user/${loggedUser.id}`)
      .then(({ data }) => {
        if (loggedUserHash === data) {
          setAuthenticated(true);
        } else {
          setAuthenticated(false);
        }

        setCheckingSession(false);
      })
      .catch(async () => {
        await AsyncStorage.removeItem("@logged_user");
        await AsyncStorage.removeItem("@logged_user_hash");
        setAuthenticated(false);
        setCheckingSession(false);
      });
  };

  useEffect(() => {
    checkIfValidSession();
  }, []);

  useEffect(() => {
    if (!checkingSession && !loading) {
      setTimeout(() => {
        SplashScreen.hideAsync();
      }, 500);
    }
  }, [checkingSession]);

  const saveUserData = async (data) => {
    await AsyncStorage.setItem("@logged_user", JSON.stringify(data)).catch((err) => {
      throw err;
    });
  };

  const getUserHashcode = async (id) => {
    await axios.get(`${SERVER_URL}/user/${id}`).then(async ({ data }) => {
      await AsyncStorage.setItem("@logged_user_hash", JSON.stringify(data))
        .then(() => {
          setAuthenticated(true);
        })
        .catch((err) => {
          throw err;
        });
    });
  };

  const login = async (login, password) => {
    const URL = `${SERVER_URL}/user/${login}/${password}`;
    setLoading(true);
    await axios
      .get(URL)
      .then(async ({ data }) => {
        await saveUserData(data);
        await getUserHashcode(data.id);
        setError(null);
      })
      .catch(async (err) => {
        setError(err);
        await AsyncStorage.removeItem("@logged_user");
        await AsyncStorage.removeItem("@logged_user_hash");
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      });
  };

  const logout = async () => {
    await AsyncStorage.removeItem("@logged_user");
    await AsyncStorage.removeItem("@logged_user_hash");
    setAuthenticated(false);
  };

  const signup = async ({ nome, apelido, avatar, senha, email, telefone }) => {
    setLoading(true);
    await axios
      .post(`${SERVER_URL}/user/`, { nome, apelido, avatar, senha, email, telefone })
      .then(() => {
        login(telefone, senha);
        setError(null);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  };

  return (
    <AuthContext.Provider value={{ authenticated, loading, error, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
