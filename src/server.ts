import Fastify from "fastify";
import cors from "@fastify/cors"
import {routes} from "./routes"

const app = Fastify({logger:true})

// PAROU MINUTO 12:40

const start = async () => {

    // habilitando rotas e cors 
    await app.register(cors) 
    await app.register(routes)

    try{
        // abrindo server
        await app.listen ({port: 3333})

    }catch(e){
       
        process.exit(1)

    }
}


start();