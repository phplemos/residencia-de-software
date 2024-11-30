import { useNavigation } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Container, Content, OpenButton, Title, Data, Company } from './styles';
import { Feather } from '@expo/vector-icons';

import { RootStackParamList } from '../../utils/Types';

interface Data{
    id: number;
    title: string;
    dataCreated: string;
    company: string;
  }


type Props = NativeStackScreenProps<RootStackParamList>;

export default function VagaCard({id, title, dataCreated, company}: Data) {
    const navigation = useNavigation<Props['navigation']>();
    
    return (
        <Container onPress={() => navigation.navigate('Details', { id })}>
            <Content>
                <Title numberOfLines={1}>{title}</Title>
                <Data>{dataCreated}</Data>
                <Company numberOfLines={1}>{company}</Company>
            </Content>
            <OpenButton>
                <Feather name="chevron-right" size={24} color={'#3D6CB9'} />
            </OpenButton>
        </Container>
    );
}
