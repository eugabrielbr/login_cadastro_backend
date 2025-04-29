import { FastifyRequest, FastifyReply } from "fastify";
import {CreateProfessorService} from "../services/CreateProfessorService"

class CreateProfessorController {

    async handle(request: FastifyRequest, reply: FastifyReply){

        const {nome,email,cpf,senha} = request.body as {nome: string, email: string, cpf: string, senha: string}
        const professorService = new CreateProfessorService()
        console.log(nome,email,cpf,senha)

        const response = await professorService.execute({nome,email,cpf,senha})

        const data = {
            nome: nome,
            email: email,
            cpf: cpf
        }

        reply.send({ message: 'Cadastro feito com sucesso!', data: data })
    } 
}

export {CreateProfessorController}
