import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/user.entity';
import { UserSeedService } from './seed.service';

// DatabaseModule: responsável por tarefas de infraestrutura de banco de dados.
// Separa responsabilidades de seed/migrations do módulo de domínio (UsersModule).
@Module({
  imports: [
    // forFeature: registra o repositório de User neste módulo.
    // Sem isso, o @InjectRepository(User) no UserSeedService não seria resolvido pelo DI.
    TypeOrmModule.forFeature([User]),
  ],
  providers: [UserSeedService],
})
export class DatabaseModule {}
