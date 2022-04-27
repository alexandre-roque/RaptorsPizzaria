import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider/useAuth";
import LoginHeader from "../LoginHeader";
import LoginContainer from "./styles";

export const Login = () => {
    const auth = useAuth();
    const navigate = useNavigate();

    async function onFinish(values: {email: string, password: string}) {
        try {
            await auth.authenticate(values.email, values.password);

            navigate('/profile');
        } catch (error) {
            
        }
    }

    return (
        <>
            <LoginHeader />
            <LoginContainer />
        </>
    );
}