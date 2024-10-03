import React from "react";
import { Text, TextInputProps } from "react-native";
import { Container, IconContainer, TextInput } from "./style";
import {Feather} from "@expo/vector-icons";

interface SearchInputProps extends TextInputProps {
    placeholder: string
}

export const SearchInput = ({ placeholder, ...props }: SearchInputProps) => {
    return (
        <Container>
            <TextInput placeholder={placeholder} placeholderTextColor="#000" {...props}/>
            <IconContainer>
                <Feather name="search" size={20} color="#000"/>
            </IconContainer>
        </Container>


    );
} 
