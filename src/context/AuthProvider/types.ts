export interface IUser {
    email?: string;
    nome?:string,
    endereco?: {
        cep?:string,
        complemento?:string,
        numero?:number,
        bairro?:string,
        cidade?:string,
        estado?:string
    },
    isLogged?: boolean
}

export interface IContext extends IUser {
    authenticate: (email: string, senha: string) => Promise<void>;
    logout: () => void;
}

export interface IAuthProvider {
    children: JSX.Element;
}