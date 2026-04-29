import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    // isGlobal: true faz o ConfigService estar disponível em qualquer módulo
    // sem precisar reimportar o ConfigModule em cada um
    ConfigModule.forRoot({ isGlobal: true }),

    // Registra o módulo de autenticação — disponibiliza POST /auth/login
    AuthModule,

    // DatabaseModule: executa o seed de usuários na inicialização (apenas em desenvolvimento)
    DatabaseModule,

    // forRootAsync: lê as variáveis via ConfigService, garantindo que o .env
    // foi carregado antes de a conexão ser tentada
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const isTest = config.get('NODE_ENV') === 'test';

        // Testes de integração: SQLite em memória, sem precisar do Docker
        if (isTest) {
          return {
            type: 'sqlite',
            database: ':memory:',
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            synchronize: true,
          };
        }

        // Desenvolvimento: PostgreSQL via Docker
        return {
          type: 'postgres',
          host: config.get('DB_HOST'),
          port: config.get<number>('DB_PORT'),
          database: config.get('DB_NAME'),
          username: config.get('DB_USER'),
          password: config.get('DB_PASS'),
          entities: [__dirname + '/**/*.entity{.ts,.js}'],
          // synchronize: cria/atualiza tabelas automaticamente — apenas fora de produção
          synchronize: config.get('NODE_ENV') !== 'production',
          logging: config.get('NODE_ENV') === 'development',
        };
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
