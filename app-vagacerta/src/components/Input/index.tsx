import { TextInputProps } from "react-native";
import { Container, Label, Field } from './styles';

interface FieldProps extends TextInputProps {
    label: string;
    placeholder?: string;
    name?: string;
    error?: string;
  }

export default function Input({label, placeholder, name, error, ...rest}:FieldProps) {
    return (
        <Container>
            <Label>{label}</Label>
            <Field placeholder={placeholder} value={name}  placeholderTextColor={'#2D767F'} {...rest}/>
        </Container>
    );
}
