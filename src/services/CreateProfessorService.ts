import prismaClient from "../prismadb";
import bcrypt from 'bcryptjs';


interface solicitacao {

    nome: string;
    email: string;
    cpf: string;
    senha: string;
} 

class CreateProfessorService{

    async execute({nome,email,cpf,senha}:solicitacao) {

        if (!nome || !email || !cpf || !senha){

            throw new Error("Preencha todos os campos")
        }

        const senhaHash = await bcrypt.hash(senha, 8);
        
        const banco = await prismaClient.professor.create({

          data: {
            nome,
            email,
            cpf,
            senha: senhaHash

          }  
        })
        

        return banco 
    }
}

export {CreateProfessorService}