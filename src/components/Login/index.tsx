import { SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider/useAuth";
import Button from "../Button";
import Input from "../Input";
import LoginHeader from "../LoginHeader";
import { ButtonContainer, HorizontalRule, InputContainer, LoginContainer } from "./styles";

export const Login = () => {
    const auth = useAuth();
    const navigate = useNavigate();
    const [emailValue, setEmailValue] = useState("");   
    const [passwordValue, setPasswordValue] = useState("");


    async function onFinish(values: {email: string, password: string}) {
        try {
            await auth.authenticate(values.email, values.password);

            navigate('/profile');
        } catch (error) {
            
        }
    }

    const onEmailChange = (e: { target: { value: SetStateAction<string>; }; }) => setEmailValue(e.target.value);
    const onPasswordChange = (e: { target: { value: SetStateAction<string>; }; }) => setPasswordValue(e.target.value);

    return (
        <>
            <LoginHeader />
            <LoginContainer>
                <InputContainer>
                    <Input value={emailValue} onChange={onEmailChange} type="text" placeholder="Email" />
                    <Input value={passwordValue} onChange={onPasswordChange} type="text" placeholder="Password" />
                </InputContainer>
                <ButtonContainer>
                    <Button onClick={() => {console.log(emailValue, passwordValue)}} children="Sign In" />
                </ButtonContainer>
                <HorizontalRule />
                <ButtonContainer>
                    <Button onClick={() => {}} children="Sign Up" />
                </ButtonContainer>
            </LoginContainer>
        </>
    );
}