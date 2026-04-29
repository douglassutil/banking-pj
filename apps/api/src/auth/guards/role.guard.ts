import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UserRole } from '@banking-pj/shared-types';
import { ROLES_KEY } from '../decorators/roles.decorator';

@Injectable()
export class RoleGuard implements CanActivate {
  // Reflector é a ferramenta do NestJS para ler metadata anexada por decorators.
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    // getAllAndOverride lê a metadata de @Roles() do handler específico primeiro,
    // e cai para o controller se o handler não tiver — isso permite sobrescrever
    // a role no nível do método quando necessário.
    const requiredRoles = this.reflector.getAllAndOverride<UserRole[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );

    // Rota sem @Roles() é considerada pública — qualquer usuário autenticado pode acessar.
    if (!requiredRoles || requiredRoles.length === 0) {
      return true;
    }

    // req.user é populado pelo JwtAuthGuard (via JwtStrategy.validate()).
    // O RoleGuard DEVE ser usado junto com JwtAuthGuard — se não houver req.user,
    // significa que o JWT não foi validado ainda, o que seria um erro de configuração.
    const { user } = context.switchToHttp().getRequest();

    return requiredRoles.includes(user?.role);
  }
}
