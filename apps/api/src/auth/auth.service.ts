import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    // UsersService fornece o acesso ao banco para buscar o usuário pelo email.
    // Está disponível aqui porque AuthModule importa UsersModule (que o exporta).
    private readonly usersService: UsersService,
    // JwtService fornece o método sign() para gerar tokens assinados.
    // Está disponível porque AuthModule registra o JwtModule.
    private readonly jwtService: JwtService,
  ) {}

  async login(dto: LoginDto): Promise<{ accessToken: string; user: object }> {
    // Passo 1: buscar o usuário pelo email.
    // findByEmail retorna null se não encontrar — não lança exceção.
    const user = await this.usersService.findByEmail(dto.email);

    // Passo 2: verificar se o usuário existe E se a senha está correta.
    // bcrypt.compare compara a senha em texto puro com o hash armazenado no banco.
    // Usamos uma única condição para ambos os casos por segurança — não informamos
    // ao cliente se o email existe ou não (evita enumeração de usuários).
    const passwordMatch = user && (await bcrypt.compare(dto.password, user.passwordHash));

    if (!passwordMatch) {
      // 401 Unauthorized: credenciais inválidas.
      // Nunca use BusinessRuleException (422) aqui — 401 é o código correto para auth.
      throw new UnauthorizedException('Credenciais inválidas');
    }

    // Passo 3: montar o payload do JWT.
    // 'sub' é a convenção JWT para o identificador do sujeito (subject) = userId.
    // role e companyId são incluídos para que guards possam verificar sem ir ao banco.
    const payload = {
      sub: user.id,
      email: user.email,
      role: user.role,
      companyId: user.companyId,
    };

    // Passo 4: gerar o token assinado e retornar com os dados públicos do usuário.
    // A senha (passwordHash) nunca é retornada — só os campos necessários ao frontend.
    return {
      accessToken: this.jwtService.sign(payload),
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
        companyId: user.companyId,
      },
    };
  }
}
