import { Alert, Text, View } from "react-native";
import { ButtonRecover, Container, ContainerTop, TextButton } from "./style";
import { SafeAreaView } from "react-native-safe-area-context";
import { VoltarButton } from "../../components/VoltarButton";
import { useNavigation } from "@react-navigation/native";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { FormInput } from "../../components/FormInput";

const validationSchema = Yup.object({
    email: Yup.string()
        .email('Digite um email válido')
        .required('O campo de email é obrigatório'),
});

const showAlert = ()=>{
    Alert.alert(
        "Atenção", 
        "Verifique seu e-mail",
        [
            {text: "OK"}
        ]
    )
}

export default function RecuperarConta() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Container>
                <ContainerTop>
                    <VoltarButton popButton={() => navigation.goBack()} nomeTarefa={"Recuperar Conta"} />
                    <Text style={{fontSize:16,textAlign:"center"}}>Se você esqueceu sua senha, digite seu endereço de e-mail associado e siga as instruções enviadas por e-mail. Caso não apareça, verifique sua pasta de 'spam'. Se você tiver problemas com seu endereço de e-mail, entre em contato conosco em support@tarefas.com com uma descrição detalhada do problema.</Text>
                </ContainerTop>
                <View style={{ justifyContent: 'center', alignItems: "center" }} >
                    <Formik
                        initialValues={{ email: '' }}
                        validationSchema={validationSchema}
                        onSubmit={(values, { resetForm }) => {
                            // Aqui você faria a requisição para recuperar a senha
                            console.log('Email enviado:', values.email);
                            resetForm() 
                            showAlert()
                            
                        }}
                    >
                        {({ handleSubmit, handleChange, errors, touched, values, handleBlur }) => (
                            <View style={{ width: '80%', justifyContent: 'center', alignItems: "center" }} >

                                <FormInput
                                    label="Digite o e-mail"
                                    placeHolder="example@email.com"
                                    value={values.email}
                                    onChangeText={handleChange("email")}
                                    onBlur={handleBlur("email")}
                                    secureTextEntry={false}
                                />
                                {touched.email && errors.email ? (
                                    <Text style={{ color: 'red' }}>{errors.email}</Text>
                                ) : null}


                                <ButtonRecover onPress={() => handleSubmit()}>
                                    <TextButton>Recuperar</TextButton>
                                </ButtonRecover>


                            </View>

                        )}
                    </Formik>
                </View>
            </Container>
        </SafeAreaView>
    );
}