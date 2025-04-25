import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import {CreateProfessorController} from "./controllers/CreateProfessorController";
import {ListProfessorController} from "./controllers/ListProfessorController"

export async function routes(fastify: FastifyInstance, option: FastifyPluginOptions) {


    fastify.post("/cadastro", async (request: FastifyRequest, reply: FastifyReply) =>{

        return new CreateProfessorController().handle(request,reply); 
    })

        
    fastify.get("/customers", async (request: FastifyRequest, reply:FastifyReply) => {
        
        return new ListProfessorController().handle(request,reply)
    })

    
}


