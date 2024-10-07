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
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../context/LoginContext";

type Props = NativeStackScreenProps<RootStackParamsList>;

export default function CustomDrawer({ ...props }) {
  const navigation = useNavigation<Props["navigation"]>();
  const { user } = useContext(LoginContext);

  return (
    <Container>
      <ContainerProfile>
        <ContainerProfileInfo>
          <ContainerTextInfo>
            <EmailInfo>{user ? user.email : "emailteste@email.com"}</EmailInfo>
            <NameInfo>{user ? user.nome : "Fulano da silva"}</NameInfo>
          </ContainerTextInfo>
          <ProfilePic source={require("../../assets/blank_profile.jpg")} />
        </ContainerProfileInfo>
      </ContainerProfile>
      <DrawerContentScrollView {...props}>
        <DrawerItem
          style={styles.DrawerItem}
          labelStyle={{ color: "#DADCD5" }}
          label="Minhas tarefas"
          onPress={() => navigation.navigate("Home")}
        />
        <DrawerItem
          style={styles.DrawerItem}
          labelStyle={{ color: "#DADCD5" }}
          label="Pesquisar"
          onPress={() => navigation.navigate("Pesquisar")}
        />
      </DrawerContentScrollView>
      <DrawerItem
        style={styles.DrawerLogout}
        labelStyle={{ color: "#DADCD5" }}
        label={"Logout"}
        onPress={() => navigation.navigate("Login")}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  DrawerItem: {
    backgroundColor: "#272A23",
  },
  DrawerLogout: {
    backgroundColor: "#F51E10",
  },
  ContainerScrowView: {},
});
