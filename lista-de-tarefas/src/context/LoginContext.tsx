import { createContext, ReactNode, useContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserProps } from "../utils/types";

interface LoginContextProps {
  signIn: (email: string, password: string) => Promise<boolean>;
  user: UserProps;
}

interface LoginProviderProps {
  children: ReactNode;
}

export const LoginContext = createContext<LoginContextProps>({
  signIn: async () => false,
  user: { id: 0, nome: "", email: "", password: "", profilePic: "" },
});

function LoginProvider({ children }: LoginProviderProps) {
  const [user, setUser] = useState<UserProps>({} as UserProps);
  async function signIn(email: string, password: string) {
    const requrestUser = await loadUser(email);
    if (requrestUser) {
      if (requrestUser.password === password) {
        user.id = requrestUser.id;
        user.nome = requrestUser.nome;
        user.email = requrestUser.email;
        user.password = requrestUser.password;
        user.profilePic = requrestUser.profilePic;
        return true;
      }
      return false;
    }
    return false;
  }

  async function loadUser(email: string) {
    try {
      const user = await AsyncStorage.getItem(email);
      if (user) {
        return JSON.parse(user);
      }
    } catch (err) {
      return null;
    }
  }

  return (
    <LoginContext.Provider value={{ user, signIn }}>
      {children}
    </LoginContext.Provider>
  );
}

export default LoginProvider;
