import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';

import { AuthFacade } from './auth.facade';
import { AuthStore } from './auth.store';
import { AuthService } from './auth.service';
import { AuthQuery } from './auth.query';

describe('AuthFacade', () => {
  let facade: AuthFacade;

  // jest.Mocked<T> substitui todos os métodos da classe por jest.fn(),
  // mantendo o contrato de tipos sem instanciar a classe real.
  let storeMock: jest.Mocked<AuthStore>;
  let serviceMock: jest.Mocked<AuthService>;
  let queryMock: jest.Mocked<AuthQuery>;
  let routerMock: jest.Mocked<Router>;

  beforeEach(() => {
    // Mocks parciais: declaramos apenas os métodos que o Facade realmente usa.
    // O cast "as unknown as jest.Mocked<T>" evita implementar campos internos
    // do Akita (como _cache, _dispatcher) que não têm papel neste teste.
    storeMock = {
      setLoading: jest.fn(),
      update: jest.fn(),
    } as unknown as jest.Mocked<AuthStore>;

    serviceMock = {
      login: jest.fn(),
    } as unknown as jest.Mocked<AuthService>;

    // AuthQuery só expõe Observables; o Facade não chama métodos da Query
    // diretamente nos fluxos testados aqui, então o mock pode ficar vazio.
    queryMock = {} as unknown as jest.Mocked<AuthQuery>;

    routerMock = {
      navigate: jest.fn(),
    } as unknown as jest.Mocked<Router>;

    // TestBed cria o container de DI do Angular no contexto de teste.
    // { provide: X, useValue: mockX } substitui a classe real pelo mock.
    TestBed.configureTestingModule({
      providers: [
        AuthFacade,
        { provide: AuthStore,   useValue: storeMock },
        { provide: AuthService, useValue: serviceMock },
        { provide: AuthQuery,   useValue: queryMock },
        { provide: Router,      useValue: routerMock },
      ],
    });

    facade = TestBed.inject(AuthFacade);
  });

  it('deve chamar service.login com email e password', () => {
    // mockReturnValue configura o que o mock retorna quando chamado.
    // Sem isso, login() retornaria undefined e o .subscribe() quebraria.
    serviceMock.login.mockReturnValue(of({ accessToken: 'tok', user: {} as any }));

    facade.login('a@b.com', '123456');

    expect(serviceMock.login).toHaveBeenCalledWith('a@b.com', '123456');
  });

  describe('quando login tem sucesso', () => {
    const mockResponse = {
      accessToken: 'jwt-token-fake',
      user: { id: '1', email: 'a@b.com', role: 'ADMIN' } as any,
    };

    // beforeEach interno: configura o mock de sucesso para todos os it deste bloco,
    // evitando repetir mockReturnValue em cada teste.
    beforeEach(() => {
      serviceMock.login.mockReturnValue(of(mockResponse));
    });

    it('deve salvar token e user no store', () => {
      facade.login('a@b.com', '123456');

      expect(storeMock.update).toHaveBeenCalledWith({
        token: 'jwt-token-fake',
        user: mockResponse.user,
      });
    });

    it('deve desativar o loading após salvar', () => {
      facade.login('a@b.com', '123456');

      expect(storeMock.setLoading).toHaveBeenCalledWith(false);
    });

    it('deve navegar para /dashboard', () => {
      facade.login('a@b.com', '123456');

      expect(routerMock.navigate).toHaveBeenCalledWith(['/dashboard']);
    });
  });

  describe('quando o login falha', () => {
    it('deve salvar a mensagem de erro na store', () => {
      const apiError = { error: { message: 'Credenciais inválidas' } };
      // throwError requer factory function no RxJS 7+ para evitar
      // compartilhamento de estado entre inscrições.
      serviceMock.login.mockReturnValue(throwError(() => apiError));

      facade.login('a@b.com', 'errada');

      expect(storeMock.update).toHaveBeenCalledWith({ error: 'Credenciais inválidas' });
    });

    it('deve usar a mensagem de fallback quando a API não retorna mensagem', () => {
      // Objeto vazio força o caminho do operador ?? no Facade:
      // err?.error?.message retorna undefined → usa o fallback.
      serviceMock.login.mockReturnValue(throwError(() => ({})));

      facade.login('a@b.com', 'errada');

      expect(storeMock.update).toHaveBeenCalledWith({ error: 'Erro ao fazer login.' });
    });

    it('deve desativar o loading após o erro', () => {
      serviceMock.login.mockReturnValue(throwError(() => ({})));

      facade.login('a@b.com', 'errada');

      expect(storeMock.setLoading).toHaveBeenCalledWith(false);
    });
  });
});
