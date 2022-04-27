import axios from "axios";

export async function RegisterRequest ({ nome, cpf, telefone, email, senha, cep, nome_rua, bairro, complemento }: 
    { nome: string; cpf: string; telefone: string; email: string; senha: string; cep: string; nome_rua: string; 
        bairro: string; numero: string; complemento: string;  }): Promise<any>{
    try {
        const request = await axios.post("https://.../api/cadastra_usuario", { nome, cpf, telefone, email, senha, cep, nome_rua, bairro, complemento });

        return request.data;
    } catch (error) {
        return null;
    }
};