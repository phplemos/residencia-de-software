import { Container, ContainerForm } from "./styles";
import { FormInput } from "../../components/FormInput";
import { Formik } from "formik";
import * as Yup from "yup";
import { Text } from "react-native";
import Checkbox from "expo-checkbox";
import React from "react";

export function Cadastro() {
  const SignUpSchema = Yup.object().shape({
    email: Yup.string().email("Email inválido").required("Campo obrigatório"),
    password: Yup.string()
      .min(6, "Mínimo de 6 caracteres")
      .max(12, "Máximo de 12 caracteres")
      .required("Campo obrigatório"),
  });
  function handleSignUp(email: string, password: string) {
    console.log("SignUp" + email + password);
  }
  return (
    <Container>
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
                <Checkbox
                  value={checked}
                  onValueChange={(termo) => setChecked(termo)}
                  color={values.termos ? "#4630EB" : undefined}
                />
              </ContainerForm>
            );
          }}
        </Formik>
      </ContainerForm>
    </Container>
  );
}
