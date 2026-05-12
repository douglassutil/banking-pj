import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthQuery } from './auth.query';

// Guard funcional (CanActivateFn) — padrão Angular 15+.
// Protege rotas que exigem autenticação: se não logado, redireciona para /auth/login.
export const authGuard: CanActivateFn = () => {
  // inject() substitui o construtor em guards funcionais.
  // Só pode ser chamado dentro de um contexto de injeção (corpo do guard é um deles).
  const authQuery = inject(AuthQuery);
  const router    = inject(Router);

  // Leitura síncrona do estado — getValue() retorna o snapshot atual do store.
  // user !== null significa que o AuthFacade já gravou os dados do usuário após o login.
  const isLoggedIn = authQuery.getValue().user !== null;

  if (isLoggedIn) {
    return true; // Angular prossegue com a navegação e renderiza o componente
  }

  // createUrlTree() é preferível a router.navigate() dentro de guards:
  // o Angular trata o UrlTree como parte do ciclo de navegação,
  // cancelando a rota original de forma limpa sem efeitos colaterais.
  return router.createUrlTree(['/auth/login']);
};
