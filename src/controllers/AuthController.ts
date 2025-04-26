import { FastifyRequest, FastifyReply } from "fastify";
import {AuthService} from "../services/AuthService"


class AuthController{


    async handle(request: FastifyRequest, reply: FastifyReply){

        const {email,senha} = request.body as {email: string,senha: string}
        const authService = new AuthService()

        const response = await authService.execute({email,senha})

        reply.send("Login feito com sucesso!")

    }
}

export {AuthController}