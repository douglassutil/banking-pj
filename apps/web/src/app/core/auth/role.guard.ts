import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserRole } from '@banking-pj/shared-types';
import { AuthQuery } from './auth.query';

// Guard funcional (CanActivateFn) — padrão Angular 15+.
// Protege rotas por perfil: verifica se o role do usuário logado está na lista
// de roles permitidos definida em route.data['roles'].
// Deve ser usado APÓS o authGuard na lista canActivate — nunca sozinho.
export const roleGuard: CanActivateFn = (route) => {
  // route é usado aqui (diferente do authGuard) porque precisamos ler route.data.
  const authQuery = inject(AuthQuery);
  const router    = inject(Router);

  const user = authQuery.getValue().user;

  // route.data['roles'] é definido na configuração da rota, ex:
  // { path: 'admin', canActivate: [authGuard, roleGuard], data: { roles: [UserRole.ADMIN] } }
  // ?? [] garante que rotas sem 'roles' definido bloqueiem por padrão (fail-safe).
  const allowed: UserRole[] = route.data['roles'] ?? [];

  // !user: defesa extra caso o authGuard não tenha sido incluído na rota.
  // !allowed.includes: o perfil do usuário não consta na lista de perfis permitidos.
  if (!user || !allowed.includes(user.role)) {
    // /forbidden diferencia "não autenticado" (/auth/login) de "sem permissão" (/forbidden).
    return router.createUrlTree(['/forbidden']);
  }

  return true;
};