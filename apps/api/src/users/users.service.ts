import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

// @Injectable() registra a classe no sistema de DI do NestJS.
// Sem esse decorator, o módulo não consegue instanciar nem injetar este service.
@Injectable()
export class UsersService {
  constructor(
    // @InjectRepository(User) injeta o repositório TypeORM da entidade User.
    // Repository<User> disponibiliza métodos prontos: find, findOne, save, delete...
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  // Usado pelo AuthService durante o login para localizar o usuário pelo email.
  // Retorna null (não lança exceção) — quem decide o que fazer com null é o AuthService.
  findByEmail(email: string): Promise<User | null> {
    return this.usersRepository.findOne({ where: { email } });
  }
}