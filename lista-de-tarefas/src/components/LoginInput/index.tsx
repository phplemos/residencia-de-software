import { Text } from "react-native";
import { EmailInput, Container, ContainerInput } from "./style";
import { BrandingLogin } from "../BrandingLogin";

type Props = {
  onChangeEmailText: (text: string) => void;
  onChangePasswordText: (text: string) => void;
  valueEmail: string;
  valuePassword: string;
};

export function LoginInput({
  onChangeEmailText,
  onChangePasswordText,
  valueEmail,
  valuePassword,
}: Props) {
  return (
    <Container>
      <ContainerInput>
        <Text>Email:</Text>
        <EmailInput
          value={valueEmail}
          onChangeText={onChangeEmailText}
          placeholder="exemplo@email.com"
        />
        <Text>Senha:</Text>
        <EmailInput
          value={valuePassword}
          onChangeText={onChangePasswordText}
          placeholder="**************"
        />
      </ContainerInput>
    </Container>
  );
}
