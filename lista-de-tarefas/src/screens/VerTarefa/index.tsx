import { Container, ButtonDeleteTarefa, ContainerDescricao } from "./styles";
import { Text } from "react-native";
import { TopbarTarefa } from "../../components/TopbarTarefa";
import { Feather } from "@expo/vector-icons"
import { Colors } from "react-native/Libraries/NewAppScreen";
import { RootStackParamsList } from "../../utils/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<RootStackParamsList>;
export default function VerTarefa({route}:any) {
    
    const 

    return (
        <Container>
            <TopbarTarefa nomeTarefa={"Descrição"} />


            <ContainerDescricao>
                <Text>
                    Ola
                </Text>
            </ContainerDescricao>

            <ButtonDeleteTarefa>
                <Feather name={'trash'} color={'#DADCD5'} size={20}></Feather>
                <Text style={{ color: "#DADCD5" }}> Excluir tarefa</Text>
            </ButtonDeleteTarefa>
        </Container>
    );
}
