import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

// JwtStrategy ensina o Passport a validar tokens JWT.
// Ao decorar uma rota com @UseGuards(AuthGuard('jwt')), o Passport invoca esta strategy
// automaticamente — extrai o token, verifica a assinatura e chama validate().
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(config: ConfigService) {
    super({
      // Instrui o Passport a extrair o token do header Authorization: Bearer <token>
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      // false: tokens expirados são rejeitados com 401. Nunca mude para true em produção.
      ignoreExpiration: false,
      // getOrThrow: lança exceção na inicialização se JWT_SECRET não estiver no .env.
      // Melhor falhar ao subir do que falhar silenciosamente em runtime.
      secretOrKey: config.getOrThrow('JWT_SECRET'),
    });
  }

  // validate() é chamado pelo Passport APÓS verificar com sucesso a assinatura do token.
  // O payload aqui é o mesmo objeto passado para jwtService.sign() no AuthService.
  // O retorno fica disponível como request.user em qualquer controller protegido.
  async validate(payload: {
    sub: string;
    email: string;
    role: string;
    companyId: string;
  }) {
    return {
      id: payload.sub,
      email: payload.email,
      role: payload.role,
      companyId: payload.companyId,
    };
  }
}