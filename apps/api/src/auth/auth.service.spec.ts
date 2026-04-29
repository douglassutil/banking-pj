import { Test, TestingModule } from '@nestjs/testing';
import { UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { UserRole } from '@banking-pj/shared-types';
import { User } from '../users/user.entity';

import * as bcrypt from 'bcrypt';

// jest.mock() precisa vir depois dos imports no modo node16.
// O Jest ainda o hoista para antes da execução — o que importa é que esteja no arquivo.
jest.mock('bcrypt');

// Fábrica que cria um usuário fictício para os testes.
// Centralizamos aqui para não repetir o objeto em cada teste.
function makeUser(overrides: Partial<User> = {}): User {
  return {
    id: 'user-uuid-123',
    email: 'admin@banking.dev',
    name: 'Admin User',
    passwordHash: '$2b$10$hashedpassword',
    role: UserRole.ADMIN,
    companyId: 'company-uuid-001',
    ...overrides,
  } as User;
}

describe('AuthService', () => {
  let service: AuthService;

  // jest.Mocked<T>: tipo que transforma todos os métodos de T em jest.Mock.
  // Isso nos dá autocomplete e tipagem nos métodos mockados.
  let usersService: jest.Mocked<UsersService>;
  let jwtService: jest.Mocked<JwtService>;

  beforeEach(async () => {
    // Criamos objetos mock para cada dependência do AuthService.
    // jest.fn() cria uma função que registra chamadas e permite controlar o retorno.
    const mockUsersService: jest.Mocked<Partial<UsersService>> = {
      findByEmail: jest.fn(),
    };

    const mockJwtService: jest.Mocked<Partial<JwtService>> = {
      sign: jest.fn().mockReturnValue('mock.jwt.token'),
    };

    // TestingModule: o container de DI do NestJS em modo de teste.
    // Registramos o service real e os mocks no lugar das dependências reais.
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        // useValue: fornece o objeto mock diretamente em vez de instanciar a classe.
        { provide: UsersService, useValue: mockUsersService },
        { provide: JwtService, useValue: mockJwtService },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    usersService = module.get(UsersService);
    jwtService = module.get(JwtService);
  });

  describe('login()', () => {
    describe('quando as credenciais são válidas', () => {
      it('retorna accessToken e dados públicos do usuário', async () => {
        const user = makeUser();

        // Configura o mock: findByEmail retorna o usuário fictício
        usersService.findByEmail.mockResolvedValue(user);

        // jest.mocked() retorna o mock tipado — funciona porque jest.mock('bcrypt') já substituiu o módulo
        jest.mocked(bcrypt.compare).mockResolvedValue(true as never);

        const result = await service.login({
          email: 'admin@banking.dev',
          password: 'Password@123',
        });

        // Verifica que o token foi gerado com o payload correto
        expect(jwtService.sign).toHaveBeenCalledWith({
          sub: user.id,
          email: user.email,
          role: user.role,
          companyId: user.companyId,
        });

        // Verifica que o accessToken retornado é o do mock
        expect(result.accessToken).toBe('mock.jwt.token');

        // Verifica que passwordHash NUNCA é exposto na resposta
        expect(result.user).toEqual({
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
          companyId: user.companyId,
        });
        expect(result.user).not.toHaveProperty('passwordHash');
      });
    });

    describe('quando o usuário não existe', () => {
      it('lança UnauthorizedException com mensagem genérica', async () => {
        // findByEmail retorna null — usuário não cadastrado
        usersService.findByEmail.mockResolvedValue(null);

        // rejects.toThrow: forma correta de verificar exceções em Promises
        await expect(
          service.login({ email: 'naoexiste@banking.dev', password: 'qualquer' }),
        ).rejects.toThrow(UnauthorizedException);
      });

      it('retorna a mesma mensagem que senha errada (anti-enumeração)', async () => {
        usersService.findByEmail.mockResolvedValue(null);

        await expect(
          service.login({ email: 'naoexiste@banking.dev', password: 'qualquer' }),
        ).rejects.toThrow('Credenciais inválidas');
      });
    });

    describe('quando a senha está errada', () => {
      it('lança UnauthorizedException com mensagem genérica', async () => {
        const user = makeUser();
        usersService.findByEmail.mockResolvedValue(user);

        // bcrypt.compare retorna false — senha não confere com o hash
        jest.mocked(bcrypt.compare).mockResolvedValue(false as never);

        await expect(
          service.login({ email: user.email, password: 'senhaErrada' }),
        ).rejects.toThrow(UnauthorizedException);
      });

      it('retorna a mesma mensagem que usuário inexistente (anti-enumeração)', async () => {
        const user = makeUser();
        usersService.findByEmail.mockResolvedValue(user);
        jest.mocked(bcrypt.compare).mockResolvedValue(false as never);

        await expect(
          service.login({ email: user.email, password: 'senhaErrada' }),
        ).rejects.toThrow('Credenciais inválidas');
      });
    });
  });
});
