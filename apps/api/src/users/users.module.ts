import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Module({
  imports: [
    // forFeature registra a entidade User neste módulo.
    // Isso é o que habilita o @InjectRepository(User) dentro do UsersService.
    TypeOrmModule.forFeature([User]),
  ],
  providers: [
    // Registra o UsersService como provedor — disponível para injeção dentro deste módulo
    UsersService,
  ],
  exports: [
    // Exportar permite que outros módulos (ex: AuthModule) importem UsersModule
    // e recebam o UsersService via injeção de dependência.
    // Sem exports, o service ficaria "privado" neste módulo.
    UsersService,
  ],
})
export class UsersModule {}