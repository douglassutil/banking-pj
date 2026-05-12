import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ValidationPipe global: ativa as validações do class-validator em todos os DTOs.
  // Sem isso, os decorators @IsEmail(), @MinLength() etc. existem mas não executam.
  // whitelist: true remove campos não declarados no DTO — protege contra mass assignment.
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  // Prefixo global: todas as rotas ficam em /api/* (ex: /api/auth/login, /api/cards).
  // Alinha com o padrão de mercado e com o proxy do Angular em desenvolvimento.
  app.setGlobalPrefix('api');

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
