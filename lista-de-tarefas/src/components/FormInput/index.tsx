import { Text } from "react-native";
import { EmailInput, ContainerInput } from "./style";

type Props = {
  onChangeText: (text: string) => void;
  onBlur: (element: any) => void;
  value: string;
  label: string;
  placeHolder: string;
  secureTextEntry: boolean;
};

export function FormInput({
  onChangeText,
  onBlur,
  value,
  label,
  placeHolder,
  secureTextEntry,
}: Props) {
  return (
    <ContainerInput>
      <Text>{label}:</Text>
      <EmailInput
        onChangeText={onChangeText}
        onBlur={onBlur}
        placeholder={placeHolder}
        value={value}
        secureTextEntry={secureTextEntry}
      />
    </ContainerInput>
  );
}
