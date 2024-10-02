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
import { TopbarTarefa } from "../../components/TopbarTarefa";
import { FormInput } from "../../components/FormInput";
import { Formik } from "formik";
import * as Yup from "yup";
import { Branding } from "../../components/Branding";
import Checkbox from "expo-checkbox";
import React, { useEffect } from "react";

export function Cadastro() {
  const SignUpSchema = Yup.object().shape({
    email: Yup.string().email("Email inválido").required("Campo obrigatório"),
    password: Yup.string()
      .min(6, "Mínimo de 6 caracteres")
      .max(12, "Máximo de 12 caracteres")
      .required("Campo obrigatório"),
    termos: Yup.boolean().oneOf([true], "Aceite os termos"),
  });

  function handleSignUp(email: string, password: string) {
    console.log("SignUp" + email + password);
  }

  return (
    <Container>
      <ContainerTopBar>
        <TopbarTarefa popButton={() => {}} nomeTarefa={"Login"} />
      </ContainerTopBar>
      <ContainerBranding>
        <Branding textoBranding="Faça seu cadastro no" />
      </ContainerBranding>
      <ContainerForm>
        <Formik
          initialValues={{ email: "", password: "", termos: false }}
          validationSchema={SignUpSchema}
          onSubmit={(values, { resetForm }) => {
            handleSignUp(values.email, values.password);
            resetForm({ values: { email: "", password: "", termos: false } });
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
