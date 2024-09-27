interface LoginContextProps {
    user: UserProps;
    login: (email: string, password: string) => void;
    logout: () => void;
}