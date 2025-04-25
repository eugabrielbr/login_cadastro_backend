import prismaClient from "../prismadb";


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
        
        const banco = await prismaClient.professor.create({

          data: {
            nome,
            email,
            cpf,
            senha

          }  
        })
        

        return banco 
    }
}

export {CreateProfessorService}