import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { UserRole } from '@banking-pj/shared-types';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { Roles } from './decorators/roles.decorator';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { RoleGuard } from './guards/role.guard';

// Controller fino: apenas recebe a requisição e delega ao Service.
// Nenhuma lógica de negócio aqui — só o mapeamento HTTP → Service.
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // POST /auth/login
  // @Body() extrai e deserializa o JSON do body para uma instância de LoginDto.
  // O ValidationPipe global valida o LoginDto antes de chegar neste método.
  @Post('login')
  login(@Body() dto: LoginDto) {
    return this.authService.login(dto);
  }

  // GET /auth/me — rota protegida por JWT. Qualquer usuário autenticado pode acessar.
  // Demonstra como JwtAuthGuard popula req.user via JwtStrategy.validate().
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Get('me')
  me(@Req() req: { user: { id: string; email: string; role: string; companyId: string } }) {
    return req.user;
  }

  // GET /auth/admin-only — rota exclusiva para ADMIN.
  // JwtAuthGuard valida o token primeiro; só então RoleGuard verifica a role.
  // A ordem dos guards importa: autenticação sempre antes de autorização.
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles(UserRole.ADMIN)
  @Get('admin-only')
  adminOnly() {
    return { message: 'Você é ADMIN — acesso permitido.' };
  }
}
