import axios from "axios";

export async function RegisterRequest ({ nome, cpf, telefone, email, senha }: { nome: string; cpf: string; telefone: string; email: string; senha: string; }): Promise<any>{
    try {
        const request = await axios.post("https://.../api/cadastra_usuario", { nome, cpf, telefone, email, senha });

        return request.data;
    } catch (error) {
        return null;
    }
};