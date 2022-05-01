import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider/useAuth";
import Button from "../Button";

export const ProtectedLayout = ({ children }: { children: JSX.Element }) => {
    const auth = useAuth();
    const navigate = useNavigate();

    if(!auth.email){
        return <div>
                    <h2>Faça login para realizar o pedido</h2>
                    <Button onClick={() => navigate('/login')}>Login</Button>
                </div>
    }

    return children;
}