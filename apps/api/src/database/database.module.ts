import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/user.entity';
import { UserSeedService } from './seed.service';
import { Card } from '../cards/card.entity';
import { CardSeedService } from './card-seed.service';

// DatabaseModule: responsável por tarefas de infraestrutura de banco de dados.
// Separa responsabilidades de seed/migrations do módulo de domínio (UsersModule).
@Module({
  imports: [
    // forFeature: registra os repositórios de User e Card no DI deste módulo.
    // Sem isso, @InjectRepository(User) e @InjectRepository(Card) não são resolvidos.
    TypeOrmModule.forFeature([User, Card]),
  ],
  providers: [UserSeedService, CardSeedService],
})
export class DatabaseModule {}
