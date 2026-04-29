import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

// Wrapper nomeado sobre o AuthGuard('jwt') do Passport.
// Usar uma classe concreta em vez de AuthGuard('jwt') inline em cada rota
// torna o código mais legível e facilita sobrescrever comportamentos no futuro.
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
