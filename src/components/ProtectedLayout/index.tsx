import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider/useAuth";
import { AdressTo } from "../../pages/Cart/styles";
import Button from "../Button";

export const ProtectedLayout = ({ children }: { children: JSX.Element }) => {
    const auth = useAuth();
    const navigate = useNavigate();

    if(!auth.email){
        return <AdressTo>
                    <h2>Faça login para realizar o pedido</h2>
                    <Button onClick={() => navigate('/login')}>Login</Button>
                </AdressTo>
    }

    return children;
}