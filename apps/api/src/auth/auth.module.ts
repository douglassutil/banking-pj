import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from '../users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    // UsersModule é importado para que o UsersService fique disponível para injeção
    // no AuthService. UsersModule precisa exportar UsersService para isso funcionar.
    UsersModule,

    // PassportModule registra a infraestrutura de autenticação do Passport no NestJS
    PassportModule,

    // registerAsync: lê as configurações do .env via ConfigService.
    // Necessário porque as variáveis de ambiente só estão disponíveis após o ConfigModule carregar.
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        secret: config.getOrThrow('JWT_SECRET'),
        // Usa a variável JWT_EXPIRES_IN do .env (valor padrão: 15m)
        // em vez de hardcodar — facilita alterar sem mexer no código
        signOptions: { expiresIn: config.getOrThrow('JWT_EXPIRES_IN') },
      }),
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}