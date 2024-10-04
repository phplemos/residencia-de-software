import { createContext, ReactNode, useState } from "react";
import { UserProps } from "../utils/types";

interface UserContextProps {
  getUser: () => UserProps;
  setUser: (user: UserProps) => void;
}

interface UserProviderProps {
  children: ReactNode;
}

export const UserContext = createContext<UserContextProps>({
  getUser: () => {
    return { id: 0, nome: "", email: "", profilePic: "" };
  },
  setUser: () => {},
});

function UserProvider({ children }: UserProviderProps) {
  const [userState, setUserState] = useState<UserProps>({} as UserProps);

  function getUser() {
    return userState;
  }

  function setUser(user: UserProps) {
    setUserState(user);
  }

  return (
    <UserContext.Provider value={{ getUser, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
