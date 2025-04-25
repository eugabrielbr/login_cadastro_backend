import prismaClient from "../prismadb";

class ListProfessorService{

    async execute (){

       const banco = await prismaClient.professor.findMany()

       return banco
    }
}

export {ListProfessorService}