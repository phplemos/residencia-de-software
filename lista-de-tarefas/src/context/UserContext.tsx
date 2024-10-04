import { createContext, ReactNode, useState } from "react";
import { UserProps } from "../utils/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
AsyncStorage;

interface UserContextProps {
  user: UserProps;
  getInfo: (email: string) => void;
}

interface UserProviderProps {
  children: ReactNode;
}

export const UserContext = createContext<UserContextProps>({
  user: {
    id: 0,
    nome: "",
    email: "",
    profilePic: "",
  },
  getInfo: () => {},
});

function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<UserProps>({
    id: 0,
    nome: "",
    email: "",
    profilePic: "",
  });

  async function getInfo(email: string) {
    try {
      const response = await AsyncStorage.getItem(email);
      if (response) {
        setUser(JSON.parse(response));
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <UserContext.Provider value={{ user, getInfo }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
