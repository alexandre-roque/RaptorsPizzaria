import { Api } from "../../services/api";

export async function RegisterRequest ({ nome, cpf, telefone, email, senha, cep, nome_rua, bairro, complemento }: 
    { nome: string; cpf: string; telefone: string; email: string; senha: string; cep: string; nome_rua: string; 
        bairro: string; numero: number; complemento: string; cidade: string; estado: string  }): Promise<any>{
    try {
        const request = await Api.post("/register_user", { nome, cpf, telefone, email, senha, cep, nome_rua, bairro, complemento });

        return request.data;
    } catch (error) {
        return null;
    }
};