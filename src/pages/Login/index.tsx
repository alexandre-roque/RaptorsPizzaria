import { SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider/useAuth";
import Button from "../../components/Button";
import Input from "../../components/Input";
import LoginHeader from "../../components/LoginHeader";
import { ButtonContainer, HorizontalRule, InputContainer, LoginBody, LoginContainer } from "./styles";

export default function Login () {
    const auth = useAuth();
    const navigate = useNavigate();
    const [emailValue, setEmailValue] = useState("");   
    const [passwordValue, setPasswordValue] = useState("");

    async function onFinish(values: {email: string, senha: string}) {
        try {
            const response = await auth.authenticate(values.email, values.senha);

            navigate('/profile');
        } catch (error) {
            throw "Email ou senha inválido"
        }
    }

    const onEmailChange = (e: React.FormEvent<HTMLInputElement>) => setEmailValue(e.currentTarget.value);
    const onPasswordChange = (e: React.FormEvent<HTMLInputElement>) => setPasswordValue(e.currentTarget.value);

    return (
        <>
            <LoginBody>
                <LoginHeader content="Faça seu login" />
                <LoginContainer>
                    <InputContainer>
                        <Input value={emailValue} onChange={onEmailChange} type="text" placeholder="Email" />
                        <Input value={passwordValue} onChange={onPasswordChange} type="password" placeholder="Senha" />
                    </InputContainer>
                    <ButtonContainer>
                        <Button onClick={() => {onFinish({email: emailValue, senha: passwordValue})}} children="Sign In" />
                    </ButtonContainer>
                    <HorizontalRule />
                    <ButtonContainer>
                        <Button onClick={() => {navigate('/register');}} children="Sign Up" />
                    </ButtonContainer>
                </LoginContainer>
            </LoginBody>
        </>
    );
};