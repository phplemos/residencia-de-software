import { View, Text } from "react-native";
import {
  Container,
  ButtonText,
  LoginButton,
  TextLoginButton,
  ContainerLogin,
} from "./styles";
import { Branding } from "../../components/Branding";
import { FormInput } from "../../components/FormInput";
import { Formik } from "formik";
import * as Yup from "yup";
import { RootStackParamsList } from "../../utils/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { useState, useContext, useEffect } from "react";
import { LoginContext } from "../../context/LoginContext";

type Props = NativeStackScreenProps<RootStackParamsList>;

export function Login() {
  const navigation = useNavigation<Props["navigation"]>();
  const { signIn } = useContext(LoginContext);
  const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Email inválido").required("Campo obrigatório"),
    password: Yup.string().required("Campo obrigatório"),
  });

  async function handleSignIn(emailForm: string, passwordForm: string) {
    const requestLogin = await signIn(emailForm, passwordForm);
    if (requestLogin) {
      navigation.navigate("Drawer");
    } else {
      alert("Usuário ou senha incorretos");
    }
  }

  return (
    <Container>
      <Branding textoBranding="Seja bem vindo ao" />
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={(values, { resetForm }) => {
          handleSignIn(values.email, values.password);
          resetForm({ values: { email: "", password: "" } });
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <ContainerLogin>
            <FormInput
              label="Email"
              placeHolder="Digite seu email"
              value={values.email}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              secureTextEntry={false}
            />
            {touched.email && errors.email && (
              <Text style={{ color: "red" }}>{errors.email}</Text>
            )}
            <FormInput
              label="Senha"
              placeHolder="Digite sua senha"
              value={values.password}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              secureTextEntry={true}
            />
            {touched.password && errors.password && (
              <Text style={{ color: "red" }}>{errors.password}</Text>
            )}
            <ButtonText>
              <Text>Esqueceu a senha?</Text>
            </ButtonText>
            <LoginButton onPress={() => handleSubmit()}>
              <TextLoginButton>Acessar</TextLoginButton>
            </LoginButton>
            <View style={{ alignItems: "center" }}>
              <Text>Não tem cadastro?</Text>
              <ButtonText onPress={() => navigation.navigate("Cadastro")}>
                <Text style={{ color: "#142E52" }}>
                  Faça seu cadastro aqui!
                </Text>
              </ButtonText>
            </View>
          </ContainerLogin>
        )}
      </Formik>
    </Container>
  );
}
