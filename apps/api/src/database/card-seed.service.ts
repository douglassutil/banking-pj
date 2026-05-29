import { Injectable, Logger, OnApplicationBootstrap } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Card } from '../cards/card.entity';
import { Repository } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { CardStatus, CardType } from '@banking-pj/shared-types';

// Seed de cartões: popula a tabela cards com dados de desenvolvimento.
// Implementa OnApplicationBootstrap para executar automaticamente ao subir o servidor.
@Injectable()
export class CardSeedService implements OnApplicationBootstrap {

  // Logger do NestJS: exibe mensagens prefixadas com o nome da classe no console
  private readonly logger = new Logger(CardSeedService.name);

  constructor(
    // @InjectRepository: instrui o NestJS a injetar o repositório TypeORM da entidade Card.
    // Só funciona se TypeOrmModule.forFeature([Card]) estiver importado no DatabaseModule.
    @InjectRepository(Card)
    private readonly cardRepository: Repository<Card>,
    private readonly config: ConfigService,
  ) {}

  // onApplicationBootstrap: chamado pelo NestJS após todos os módulos serem inicializados.
  // É o momento certo para seeds — todos os repositórios e conexões já estão prontos.
  async onApplicationBootstrap(): Promise<void> {
    // Executa apenas em desenvolvimento — nunca em produção ou testes automatizados
    if (this.config.get('NODE_ENV') !== 'development') return;

    // Verificação de idempotência: se já existem cartões, o seed já rodou antes.
    // Sem essa checagem, cada reinício do servidor duplicaria os dados.
    const existingCards = await this.cardRepository.count();
    if (existingCards > 0) {
      this.logger.log('Seed de cartões já executado. Pulando.');
      return;
    }

    // Três cartões cobrem todos os cenários de teste:
    // - CARDHOLDER (user@banking.dev) verá apenas os dois primeiros (filtro por cardholderEmail)
    // - ADMIN (admin@banking.dev) verá os três (filtro por companyId)
    // - Um cartão BLOCKED para validar o badge de status na listagem do frontend
    await this.cardRepository.save([
      {
        lastFourDigits: '1234',
        status: CardStatus.ACTIVE,
        type: CardType.PHYSICAL,
        cardholderName: 'João Portador',
        // Email igual ao do UserSeedService — é a chave do filtro no CardsService
        cardholderEmail: 'user@banking.dev',
        companyId: '00000000-0000-0000-0000-000000000001',
      },
      {
        lastFourDigits: '5678',
        status: CardStatus.BLOCKED,
        type: CardType.VIRTUAL,
        cardholderName: 'João Portador',
        cardholderEmail: 'user@banking.dev',
        companyId: '00000000-0000-0000-0000-000000000001',
      },
      {
        lastFourDigits: '9999',
        status: CardStatus.ACTIVE,
        type: CardType.PHYSICAL,
        cardholderName: 'Admin User',
        // Este cartão só aparece para o ADMIN — o CARDHOLDER não tem acesso a ele
        cardholderEmail: 'admin@banking.dev',
        companyId: '00000000-0000-0000-0000-000000000001',
      },
    ]);

    this.logger.log('Seed concluído: 3 cartões criados.');
  }
}