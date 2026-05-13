import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Card } from './card.entity';

@Injectable()
export class CardsService {
  constructor(
    // @InjectRepository resolve o repositório TypeORM da entidade Card via DI.
    // Requer TypeOrmModule.forFeature([Card]) no CardsModule para funcionar.
    @InjectRepository(Card)
    private readonly cardRepository: Repository<Card>,
  ) {}

  // Recebe os três dados do token JWT extraídos pelo Controller.
  // O Service não conhece HTTP — só aplica a regra de quem vê o quê.
  findAll(companyId: string, role: string, email: string): Promise<Card[]> {
    if (role === 'ADMIN') {
      // ADMIN vê todos os cartões da empresa
      // SQL gerado: SELECT * FROM cards WHERE company_id = $1
      return this.cardRepository.find({
        where: { companyId },
      });
    }

    // CARDHOLDER vê apenas os próprios cartões.
    // Dois campos no where garantem isolamento: mesmo email em empresas diferentes
    // não vaza dados — o companyId é sempre o filtro primário.
    // SQL gerado: SELECT * FROM cards WHERE company_id = $1 AND cardholder_email = $2
    return this.cardRepository.find({
      where: { companyId, cardholderEmail: email },
    });
  }
}
