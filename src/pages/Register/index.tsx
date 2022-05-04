import { useState, FocusEvent, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { ButtonContainer, LoginBody } from "../Login/styles";
import LoginHeader from "../../components/LoginHeader";
import { RegisterContainer, InputContainer, InputItem } from "./styles";
import axios from "axios";
import { Api } from "../../services/api";

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
            email: string, senha: string, cep: string, nome_rua: string, bairro: string, numero: number, 
            complemento: string, cidade: string, estado: string}) {

        try {
            const request = await Api.post("/register_user", { nome: values.nome, cpf: values.cpf, telefone: values.telefone, 
                email: values.email, senha: values.senha, cep: values.cep, nome_rua: values.nome_rua, 
                bairro: values.bairro, numero: values.numero, complemento: values.complemento, 
                cidade: values.cidade, estado: values.estado});
            
            navigate('/login');
        } catch (error) {
            console.log("Erro ao registrar o usuário");
        }
    };

    return (
        <>
            <RegisterContainer>
                <LoginHeader  content="Registre-se" />
                <InputContainer>
                    <InputItem>
                        <Input value={nameValue} onChange={onNameChange} type="text" placeholder="Nome" />
                        <Input value={cpfValue} onChange={onCpfChange} type="text" placeholder="Cpf" />
                        <Input value={phoneValue} onChange={onPhoneChange} type="text" placeholder="Telefone" />
                        <Input value={emailValue} onChange={onEmailChange} type="text" placeholder="Email" />
                        <Input value={passwordValue} onChange={onPasswordChange} type="password" placeholder="Senha" />
                    </InputItem>
                    <InputItem>
                        <Input value={cepValue} onChange={onCepChange} onBlur={checkCep} type="text" placeholder="Cep" />
                        <Input value={ruaValue} onChange={onRuaChange} type="text" placeholder="Rua" />
                        <Input value={numValue} onChange={onNumChange} type="text" placeholder="Número" />
                        <Input value={bairroValue} onChange={onBairroChange} type="text" placeholder="Bairro" />
                        <Input value={cidadeValue} onChange={onCidadeChange} type="text" placeholder="Cidade" />
                        <Input value={estadoValue} onChange={onEstadoChange} type="text" placeholder="Estado" />
                        <Input value={compValue} onChange={onCompChange} type="text" placeholder="Complemento" />
                    </InputItem>

                    </InputContainer>
                <ButtonContainer>
                    <Button onClick={() => {
                        onFinish({nome: nameValue, cpf: cpfValue, telefone: phoneValue.replace(/\D/g, ''), email: emailValue, senha: passwordValue,
                            cep: cepValue.replace(/\D/g, ''), nome_rua: ruaValue, bairro: bairroValue, numero: parseInt(numValue), complemento: compValue, 
                            cidade: cidadeValue, estado: estadoValue
                    })}} children="Register" />
                </ButtonContainer>
            </RegisterContainer>
        </>
    );
};