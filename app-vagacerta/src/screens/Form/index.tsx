import { Image } from 'react-native';
import { Wrapper,Container, Form, TextContainer, TextBlack, TextLink, TextLinkContainer } from './styles';
import BGTop from '../../assets/BGTop.png';
import Logo from '../../components/Logo';
import Input from '../../components/Input';
import { Button } from '../../components/Button';

export default function FormScreen({navigation}) {
    return (
        <Wrapper>
            <Image source={BGTop} />

            <Container>

                <Form>
                    <Logo />
                    <Input label='Nome' placeholder='digite seu nome'/>
                    <Input label='E-mail' placeholder='digite seu e-mail'/>
                    <Input label='Senha' placeholder='digite sua senha'/>
                    <Button title="Entrar" noSpacing={true} variant='primary'/>
                    <TextContainer>
                        <TextBlack>Já tem uma conta?</TextBlack>
                        <TextLinkContainer onPress={() => navigation.navigate('Login')}>
                            <TextLink>
                                    Faça seu login.
                            </TextLink>
                        </TextLinkContainer>
                    </TextContainer>
                </Form>

            </Container>
        </Wrapper>
    );
}
