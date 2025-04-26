import prismaClient from "../prismadb";
import bcrypt from 'bcryptjs';

interface solicitacao {
    email: string;
    senha: string;
} 


class AuthService {
    async execute({email, senha}: solicitacao) {
        
        const professor = await prismaClient.professor.findUnique({
            where: {
                email: email,
            }
        });

        if (!professor) {
            throw new Error("Professor não encontrado");
        }

        const senhaValida = await bcrypt.compare(senha, professor.senha);

        if (!senhaValida) {
            throw new Error("Senha incorreta");
        }

        return professor;
    }
}


export {AuthService}