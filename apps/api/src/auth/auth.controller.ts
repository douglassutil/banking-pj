import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

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
}
