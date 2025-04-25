import { FastifyRequest, FastifyReply } from "fastify";
import {ListProfessorService} from "../services/ListProfessorService"

class ListProfessorController{

    async handle(request: FastifyRequest, reply: FastifyReply){
        const listProfessorService = new ListProfessorService();

        const response = await listProfessorService.execute();

        reply.send(response);
    }

}

export {ListProfessorController}