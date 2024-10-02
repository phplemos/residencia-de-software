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
import SignInService from "../../services/login";

type Props = NativeStackScreenProps<RootStackParamsList>;

export function Login() {
  const navigation = useNavigation<Props["navigation"]>();

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Email inválido").required("Campo obrigatório"),
    password: Yup.string().required("Campo obrigatório"),
  });

  function handleSignIn(email: string, password: string) {
    const login = SignInService(email, password);
    if (login) {
      navigation.navigate("ListaTarefas");
    } else {
      alert("Email ou senha inválidos");
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
              <ButtonText>
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
