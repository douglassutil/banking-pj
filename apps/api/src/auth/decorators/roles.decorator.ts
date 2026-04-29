import { SetMetadata } from '@nestjs/common';
import { UserRole } from '@banking-pj/shared-types';

// ROLES_KEY é a chave usada para armazenar e recuperar a metadata de roles.
// Exportamos para o RoleGuard poder ler com o mesmo identificador.
export const ROLES_KEY = 'roles';

// @Roles() anexa metadata ao handler ou controller usando SetMetadata.
// Exemplo de uso: @Roles(UserRole.ADMIN) em cima de um método de controller.
// O RoleGuard lê essa metadata em runtime via Reflector.
export const Roles = (...roles: UserRole[]) => SetMetadata(ROLES_KEY, roles);
