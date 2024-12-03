import React, { createContext, useContext, useState, ReactNode } from "react";
import api from "../services/api";
import { UserProps } from "../utils/Types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AxiosError } from "axios";

interface AuthContextType {
  login: (email: String, senha: String) => Promise<String>;
  logout: () => void;
  cadastro: (email: String, senha: String, nome: String) => Promise<String>;
  usuario: UserProps;
  getUserFromApi: (userId: String) => Promise<void>;
}

export const AuthContext = createContext<AuthContextType>({
  login: async () => "",
  logout: () => {},
  cadastro: async () => "",
  usuario: {} as UserProps,
  getUserFromApi: async () => {},
});

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [usuario, setUsuario] = useState<UserProps>({} as UserProps);

  async function getUserFromApi(userId: String) {
    try {
      const userOffline = await AsyncStorage.getItem("userOffline");
      if (userOffline) {
        setUsuario(JSON.parse(userOffline));
      } else {
        const response = await api.get(`/usuarios/${userId}`);
        setUsuario(response.data);
      }
    } catch (e) {
      const error = e as AxiosError;
      if (!error.status) {
        console.log("Falha ao comunicar com api");
        const userOffline = await AsyncStorage.getItem("userOffline");
        if (userOffline) {
          setUsuario(JSON.parse(userOffline));
        }
      }
      console.log(error.response.data);
    }
  }

  async function login(email: String, senha: String) {
    try {
      const response = await api.post(
        "/login",
        { email: email, senha: senha },
        { timeout: 2000 }
      );
      console.log(response.data);
      setUsuario(response.data);
      await AsyncStorage.setItem("isLogged", "true");
      await AsyncStorage.setItem("userId", `${response.data.id}`);
      await AsyncStorage.setItem("userOffline", JSON.stringify(response.data));
      return "200";
    } catch (e) {
      const error = e as AxiosError;
      console.log("caiu no Catch");

      if (!error.status) {
        return "Falha ao comunicar com api";
      }
      if (error.status === 401) {
        return "E-mail ou senha inválidos.";
      }
      if (error.status === 400) {
        return "Preencha todos os campos.";
      }
      if (error.status === 404) {
        return "Usuário não encontrado.";
      }
    }
  }

  const logout = () => {
    AsyncStorage.removeItem("isLogged");
    AsyncStorage.removeItem("userId");
  };

  const cadastro = async (email: String, senha: String, nome: String) => {
    try {
      const response = await api.post("/cadastro", {
        nome: nome,
        email: email,
        senha: senha,
      });
      setUsuario(response.data);
      await AsyncStorage.setItem("isLogged", "true");
      await AsyncStorage.setItem("userId", `${response.data.id}`);
      return "200";
    } catch (e) {
      const error = e as AxiosError;
      console.log(error.response.data);
      if (error.status === 400) {
        return "Usuario ja cadastrado.";
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{ login, getUserFromApi, logout, usuario, cadastro }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
