export interface IUser {
    email?: string;
    nome?:string,
    telefone?: string,
    cpf?:string,
    endereco?: {
        cep?:string,
        complemento?:string,
        numero?:string,
        bairro?:string,
        cidade?:string,
        estado?:string
    }
}

export interface IContext extends IUser {
    authenticate: (email: string, senha: string) => Promise<void>;
    logout: () => void;
}

export interface IAuthProvider {
    children: JSX.Element;
}