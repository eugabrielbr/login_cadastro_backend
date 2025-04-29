import Fastify from "fastify";
import cors from "@fastify/cors"
import {routes} from "./routes"
import jwt from '@fastify/jwt'
import dotenv from 'dotenv'


dotenv.config()
const app = Fastify({logger:true})


const start = async() => {

    // habilitando rotas e cors 
    await app.register(cors) 
    await app.register(routes)
    app.register(jwt, {
        secret: process.env.JWT_CHAVE as string
    })

    try{
        // abrindo server
        await app.listen ({port: 3333})

    }catch(e){
       
        process.exit(1)

    }
}


start();