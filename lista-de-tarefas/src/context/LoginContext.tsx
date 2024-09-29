import { UserProps } from "../utils/types";

interface LoginContextProps {
    user: UserProps;
    signIn: (email: string, password: string) => void;
    signOut: () => void;
}