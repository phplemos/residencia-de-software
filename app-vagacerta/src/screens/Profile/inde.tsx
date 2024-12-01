import React from 'react';
import { View, Text, Button } from 'react-native';
import { useAuth } from '../../components/ConText/AuthContext';

const Profile: React.FC<{ navigation: any }> = ({ navigation }) => {
  const { logout } = useAuth();

  return (
    <View>
      <Text>Perfil</Text>
      <Button title="Logout" onPress={() => {
        logout();
        navigation.navigate('Login');
      }} />
    </View>
  );
};

