import { FastifyRequest, FastifyReply } from 'fastify';
import { AuthService } from '../services/AuthService';

class AuthController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { email, senha } = request.body as { email: string; senha: string };
    const authService = new AuthService();

    try {
      const response = await authService.execute({ email, senha });

      // sucesso em formato JSON
      reply.send({ message: 'Login feito com sucesso!', data: response });
    } catch (error) {
      // Verifica se o erro é uma instância de Error
      if (error instanceof Error) {
        // Caso ocorra um erro, retorna o erro em formato JSON
        reply.status(401).send({ message: 'Login falhou!', error: error.message });
      } else {
        // Caso o erro não seja uma instância de Error
        reply.status(500).send({ message: 'Erro desconhecido!', error: 'Ocorreu um erro inesperado.' });
      }
    }
  }
}

export { AuthController };