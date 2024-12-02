import React from "react";
import { Button, View, Text } from "react-native";
import { useAuth } from "../../context/AuthContext";

interface LogoutButtonProps {
  navigation: any; // Tipo de navegação pode ser ajustado conforme necessário
}

const LogoutButton: React.FC<LogoutButtonProps> = ({ navigation }) => {
  const { logout } = useAuth();

  return (
    <View>
      <Text>Perfil</Text>
      <Button
        title="Logout"
        onPress={() => {
          logout();
          navigation.navigate("Login"); // Certifique-se de que a navegação esteja configurada corretamente
        }}
      />
    </View>
  );
};

export default LogoutButton;
