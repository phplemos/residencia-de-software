import {
  Container,
  ContainerForm,
  ContainerBranding,
  TextCheckbox,
  ContainerCheckbox,
  TextSignUpButton,
  ButtonSignUp,
  AlertText,
  ContainerTopBar,
} from "./styles";
import { VoltarButton } from "../../components/VoltarButton";
import { FormInput } from "../../components/FormInput";
import { Formik } from "formik";
import * as Yup from "yup";
import { Branding } from "../../components/Branding";
import Checkbox from "expo-checkbox";
import React, { useContext, useEffect } from "react";
import { RootStackParamsList, UserProps } from "../../utils/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { CadastroContext } from "../../context/CadastroContext";

type Props = NativeStackScreenProps<RootStackParamsList>;

export function Cadastro() {
  const navigation = useNavigation<Props["navigation"]>();
  const { createUser } = useContext(CadastroContext);
  const SignUpSchema = Yup.object().shape({
    email: Yup.string().email("Email inválido").required("Campo obrigatório"),
    password: Yup.string()
      .min(6, "Mínimo de 6 caracteres")
      .max(12, "Máximo de 12 caracteres")
      .required("Campo obrigatório"),
    termos: Yup.boolean().oneOf([true], "Aceite os termos"),
  });

  function handleSignUp({ id, nome, email, password, profilePic }: UserProps) {
    console.log({ id, nome, email, password, profilePic });
    createUser({ id, nome, email, password, profilePic });
    navigation.navigate("Login");
  }

  return (
    <Container>
      <ContainerTopBar>
        <VoltarButton
          popButton={() => navigation.goBack}
          nomeTarefa={"para o login"}
        />
      </ContainerTopBar>
      <ContainerBranding>
        <Branding textoBranding="Faça seu cadastro no" />
      </ContainerBranding>
      <ContainerForm>
        <Formik
          initialValues={{
            id: Math.floor(Math.random() * 100), // Gerando numero aleatorio para o id
            nome: "",
            email: "",
            password: "",
            profilePic: "",
            termos: false,
          }}
          validationSchema={SignUpSchema}
          onSubmit={(values, { resetForm }) => {
            handleSignUp({ ...values });
            resetForm({
              values: {
                id: Math.floor(Math.random() * 100),
                nome: "",
                email: "",
                password: "",
                profilePic: "",
                termos: false,
              },
            });
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => {
            const [checked, setChecked] = React.useState(false);
            useEffect(() => {
              touched.termos = checked;
              values.termos = checked;
            }, [checked]);
            return (
              <ContainerForm>
                <FormInput
                  label="Nome"
                  placeHolder="Digite seu nome"
                  value={values.nome}
                  onChangeText={handleChange("nome")}
                  onBlur={handleBlur("nome")}
                  secureTextEntry={false}
                />
                {touched.nome && errors.nome && (
                  <AlertText>{errors.nome}</AlertText>
                )}
                <FormInput
                  label="Email"
                  placeHolder="Digite seu email"
                  value={values.email}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  secureTextEntry={false}
                />
                {touched.email && errors.email && (
                  <AlertText>{errors.email}</AlertText>
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
                  <AlertText>{errors.password}</AlertText>
                )}
                <ContainerCheckbox>
                  <Checkbox
                    value={checked}
                    onValueChange={(termo) => setChecked(termo)}
                    color={values.termos ? "#4630EB" : undefined}
                  />
                  <TextCheckbox>Aceitar os Termos de uso.</TextCheckbox>
                </ContainerCheckbox>
                {touched.termos && errors.termos && (
                  <AlertText>{errors.termos}</AlertText>
                )}
                <ButtonSignUp onPress={() => handleSubmit()}>
                  <TextSignUpButton>Cadastrar</TextSignUpButton>
                </ButtonSignUp>
              </ContainerForm>
            );
          }}
        </Formik>
      </ContainerForm>
    </Container>
  );
}
