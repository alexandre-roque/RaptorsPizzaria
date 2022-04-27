import { useState, FocusEvent, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterRequest } from "../../context/RegisterProvider";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { ButtonContainer } from "../Login/styles";
import LoginHeader from "../../components/LoginHeader";
import { RegisterContainer, InputContainer } from "./styles";
import axios from "axios";

export default function Register() {
    const [nameValue, setNameValue] = useState("");
    const [cpfValue, setCpfValue] = useState(""); 
    const [phoneValue, setPhoneValue] = useState("");
    
    const [cepValue, setCepValue] = useState("");
    const [ruaValue, setRuaValue] = useState("");
    const [numValue, setNumValue] = useState("");
    const [bairroValue, setBairroValue] = useState("");
    const [cidadeValue, setCidadeValue] = useState("");
    const [estadoValue, setEstadoValue] = useState("");
    const [compValue, setCompValue] = useState("");

    const [emailValue, setEmailValue] = useState(""); 
    const [passwordValue, setPasswordValue] = useState("");  

    const onNameChange = (e: React.FormEvent<HTMLInputElement>) =>  setNameValue(e.currentTarget.value);
    const onCpfChange = (e: React.FormEvent<HTMLInputElement>) =>   setCpfValue(e.currentTarget.value);
    const onPhoneChange = (e: React.FormEvent<HTMLInputElement>) => setPhoneValue(e.currentTarget.value);
    
    const onCepChange = (e: React.FormEvent<HTMLInputElement>) => setCepValue(e.currentTarget.value);
    const onRuaChange = (e: React.FormEvent<HTMLInputElement>) => setRuaValue(e.currentTarget.value);
    const onNumChange = (e: React.FormEvent<HTMLInputElement>) => setNumValue(e.currentTarget.value);
    const onBairroChange = (e: React.FormEvent<HTMLInputElement>) => setBairroValue(e.currentTarget.value);
    const onCidadeChange = (e: React.FormEvent<HTMLInputElement>) => setCidadeValue(e.currentTarget.value);
    const onEstadoChange = (e: React.FormEvent<HTMLInputElement>) => setEstadoValue(e.currentTarget.value);
    const onCompChange = (e: React.FormEvent<HTMLInputElement>) => setCompValue(e.currentTarget.value);
    
    const onEmailChange = (e: React.FormEvent<HTMLInputElement>) => setEmailValue(e.currentTarget.value);
    const onPasswordChange = (e: React.FormEvent<HTMLInputElement>) => setPasswordValue(e.currentTarget.value);
    
    const checkCep = async (e: FocusEvent<HTMLInputElement>) => {
        const cep = e.currentTarget.value.replace(/\D/g, '');
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json`);

        setRuaValue(response.data.logradouro);
        setBairroValue(response.data.bairro);
        setCidadeValue(response.data.localidade);
        setEstadoValue(response.data.uf);
        setRuaValue(response.data.logradouro);
        
    };

    const navigate = useNavigate();
    
    async function onFinish(values: {nome: string, cpf: string, telefone: string, 
            email: string, senha: string, cep: string, nome_rua: string, bairro: string, numero: string, complemento: string,}) {
        try {
            console.log({ nome: values.nome, cpf: values.cpf, telefone: values.telefone, 
                email: values.email, senha: values.senha, cep: values.cep, nome_rua: values.nome_rua, 
                bairro: values.bairro, numero: values.numero, complemento: values.complemento});

            const response = await RegisterRequest({ nome: values.nome, cpf: values.cpf, telefone: values.telefone, 
                email: values.email, senha: values.senha, cep: values.cep, nome_rua: values.nome_rua, 
                bairro: values.bairro, numero: values.numero, complemento: values.complemento});
            
            if(response)
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
                    
                    <Input value={cepValue} onChange={onCepChange} onBlur={checkCep} type="text" placeholder="Cep" />
                    <Input value={ruaValue} onChange={onRuaChange} type="text" placeholder="Rua" />
                    <Input value={numValue} onChange={onNumChange} type="text" placeholder="Número" />
                    <Input value={bairroValue} onChange={onBairroChange} type="text" placeholder="Bairro" />
                    <Input value={cidadeValue} onChange={onCidadeChange} type="text" placeholder="Cidade" />
                    <Input value={estadoValue} onChange={onEstadoChange} type="text" placeholder="Estado" />
                    <Input value={compValue} onChange={onCompChange} type="text" placeholder="Complemento" />

                    <Input value={emailValue} onChange={onEmailChange} type="text" placeholder="Email" />
                    <Input value={passwordValue} onChange={onPasswordChange} type="password" placeholder="Senha" />
                </InputContainer>
                <ButtonContainer>
                    <Button onClick={() => {
                        onFinish({nome: nameValue, cpf: cpfValue, telefone: phoneValue, email: emailValue, senha: passwordValue,
                            cep: cepValue, nome_rua: ruaValue, bairro: bairroValue, numero: numValue, complemento: compValue
                    })}} children="Register" />
                </ButtonContainer>
            </RegisterContainer>
        </>
    );
};