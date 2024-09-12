import { View, Text } from "react-native";
import { Container} from "./styles";

import { LoginInput } from "../../components/LoginInput";

export function Login() {
  return (
    <Container>
      <LoginInput/>
    </Container>
  );
}
