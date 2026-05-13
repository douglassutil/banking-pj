import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Card } from './card.entity';
import { CardsController } from './cards.controller';
import { CardsService } from './cards.service';

@Module({
  // forFeature registra Repository<Card> para injeção via @InjectRepository(Card).
  // forRoot (no AppModule) abre a conexão; forFeature disponibiliza o repositório por módulo.
  imports: [TypeOrmModule.forFeature([Card])],
  controllers: [CardsController],
  // CardsService não está em exports: nenhum outro módulo precisa dele agora.
  // Exportar seria necessário somente se outro módulo fosse injetar CardsService.
  providers: [CardsService],
})
export class CardsModule {}
