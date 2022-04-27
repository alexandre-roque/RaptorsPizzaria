import axios from "axios";

export async function RegisterRequest ({ nome, cpf, telefone, email, password }: { nome: string; cpf: string; telefone: string; email: string; password: string; }): Promise<any>{
    try {
        const request = await axios.post("https://.../api/cadastra_usuario", { nome, cpf, telefone, email, password });

        return request.data;
    } catch (error) {
        return null;
    }
};