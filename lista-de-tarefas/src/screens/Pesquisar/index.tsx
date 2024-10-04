import { View, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Container, ContainerTop } from "./styles";
import { VoltarButton } from "../../components/VoltarButton";
import { SearchInput } from "../../components/SearchInput";
import { useContext, useState } from "react";
import { TarefaContext } from "../../context/TarefaContext";
import { Tarefa } from "../../components/Tarefa";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../../utils/types";
import { useNavigation } from "@react-navigation/native";

export default function Pesquisar() {
    const { tarefas } = useContext(TarefaContext);
    const [searchText, setSearchText] = useState("");

    const navigation = useNavigation();

    function handlePress() {
    }

    const filtrarTarefas = tarefas.filter((item) => item.titulo.toLowerCase().includes(searchText.toLowerCase()))

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Container>
                <ContainerTop>
                    <VoltarButton popButton={navigation.goBack} nomeTarefa={"Procurar"} />
                    <SearchInput placeholder="Digite aqui" value={searchText} onChangeText={(text) => setSearchText(text)} />
                </ContainerTop>
                <FlatList
                    data={filtrarTarefas}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <Tarefa
                            id={item.id}
                            titulo={item.titulo}
                            iconIsVisible={false}
                        />
                    )}
                    ListEmptyComponent={() => (
                        <View>
                            <Text style={{ textAlign: "center" }}>Nenhum item encontrado</Text>
                        </View>
                    )}
                    contentContainerStyle={{ paddingBottom: 20 }}
                />

            </Container>
        </SafeAreaView>
    );
}