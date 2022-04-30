import React, {createContext, useEffect, useState} from "react";
import { IAuthProvider, IContext, IUser } from "./types";
import { getUserLocalStorage, LoginRequest, setUserLocalStorage } from "./util";

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({children}: IAuthProvider) => {
    const [user, setUser] = useState<IUser | null>();

    useEffect(() => {
        const user = getUserLocalStorage();

        if(user){
            setUser(user);
        }
    }, []);

    async function authenticate(email:string, senha: string) {
        const response = await LoginRequest(email, senha);

        console.log(response);

        if(!response.data){
            throw "Não foi possível fazer login";
        }

        const payload = { 
            email, 
            nome: response.nome, 
            telefone: response.telefone, 
            cpf: response.cpf, 
            endereco: response.endereco
        };

        setUser(payload);
        setUserLocalStorage(payload);
    }

    function logout () {
        setUser(null);
        setUserLocalStorage(null);
    }

    return (
        <AuthContext.Provider value={{...user, authenticate, logout}}>
            {children}
        </AuthContext.Provider>
    )
}