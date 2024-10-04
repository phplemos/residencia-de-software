import { Linking } from "react-native";
import { Text, StyleSheet } from "react-native";
import {
  Container,
  ContainerProfile,
  ContainerProfileInfo,
  ContainerTextInfo,
  EmailInfo,
  NameInfo,
  ProfilePic,
} from "./styles";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { RootStackParamsList } from "../../utils/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

type Props = NativeStackScreenProps<RootStackParamsList>;

export default function CustomDrawer({ ...props }) {
  const navigation = useNavigation<Props["navigation"]>();


  return (
    <Container>
      <ContainerProfile>
        <ContainerProfileInfo>
          <ContainerTextInfo>
            <EmailInfo>{user.email} phplemos.dev@gmail.com</EmailInfo>
            <NameInfo>{user.nome}Pedro Pinheiro</NameInfo>
          </ContainerTextInfo>
          <ProfilePic source={require("../../assets/blank_profile.jpg")} />
        </ContainerProfileInfo>
      </ContainerProfile>
      <DrawerContentScrollView {...props}>
        <DrawerItem
          style={styles.DrawerItem}
          label="Home"
          onPress={() => navigation.navigate("Home")}
        />
        <DrawerItem
          label="Pesquisar"
          onPress={() => navigation.navigate("Home")}
        />
        <DrawerItem
          label="Logout"
          onPress={() => navigation.navigate("Login")}
        />
      </DrawerContentScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  DrawerItem: {
    backgroundColor: "#272A23",
    color: "#DADCD5",
  },
});
