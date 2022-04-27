import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterRequest } from "../../context/RegisterProvider";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { ButtonContainer } from "../Login/styles";
import LoginHeader from "../../components/LoginHeader";
import { RegisterContainer, InputContainer } from "./styles";

export default function Register() {
    const [nameValue, setNameValue] = useState("");
    const [cpfValue, setCpfValue] = useState(""); 
    const [phoneValue, setPhoneValue] = useState(""); 
    const [emailValue, setEmailValue] = useState(""); 
    const [passwordValue, setPasswordValue] = useState("");  

    const onNameChange = (e: React.FormEvent<HTMLInputElement>) =>  setNameValue(e.currentTarget.value);
    const onCpfChange = (e: React.FormEvent<HTMLInputElement>) =>   setCpfValue(e.currentTarget.value);
    const onPhoneChange = (e: React.FormEvent<HTMLInputElement>) => setPhoneValue(e.currentTarget.value);
    const onEmailChange = (e: React.FormEvent<HTMLInputElement>) => setEmailValue(e.currentTarget.value);
    const onPasswordChange = (e: React.FormEvent<HTMLInputElement>) => setPasswordValue(e.currentTarget.value);
    
    const navigate = useNavigate();
    
    async function onFinish(values: {nome: string, cpf: string, telefone: string, email: string, senha: string}) {
        try {
            await RegisterRequest({ nome: values.nome, cpf: values.cpf, telefone: values.telefone, email: values.email, password: values.senha });

            navigate('/login');
        } catch (error) {
            
        }
    };

    return (
        <>
            <LoginHeader  content="Registre-se" />
            <RegisterContainer>
                <InputContainer>
                    <Input value={nameValue} onChange={onNameChange} type="text" placeholder="Nome" />
                    <Input value={cpfValue} onChange={onCpfChange} type="text" placeholder="Cpf" />
                    <Input value={phoneValue} onChange={onPhoneChange} type="text" placeholder="Telefone" />
                    <Input value={emailValue} onChange={onEmailChange} type="text" placeholder="Email" />
                    <Input value={passwordValue} onChange={onPasswordChange} type="password" placeholder="Senha" />
                </InputContainer>
                <ButtonContainer>
                    <Button onClick={() => {onFinish({nome: nameValue, cpf: cpfValue, telefone: phoneValue, email: emailValue, senha: passwordValue})}} children="Register" />
                </ButtonContainer>
            </RegisterContainer>
        </>
    );
};