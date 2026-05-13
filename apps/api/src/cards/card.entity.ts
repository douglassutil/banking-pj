import { CardStatus, CardType } from '@banking-pj/shared-types';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('cards')
export class Card {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // length: 4 cria VARCHAR(4) — o banco rejeita valores fora desse tamanho
  @Column({ length: 4 })
  lastFourDigits: string;

  // type: 'enum' cria um tipo nativo no PostgreSQL — rejeita valores fora do enum
  // default: ACTIVE porque todo cartão nasce ativo
  @Column({ type: 'enum', enum: CardStatus, default: CardStatus.ACTIVE })
  status: CardStatus;

  // Sem default: o tipo (físico/virtual) deve ser informado explicitamente na criação
  @Column({ type: 'enum', enum: CardType })
  type: CardType;

  @Column()
  cardholderName: string;

  // FK lógica: referência por email em vez de FK para User, para que o cartão
  // sobreviva a deleções ou migrações de conta sem violar integridade referencial
  @Column()
  cardholderEmail: string;

  // Isolamento multi-tenant: toda query filtra por companyId — ver ADR 007
  @Column('uuid')
  companyId: string;

  @CreateDateColumn()
  createdAt: Date;

  // Atualizado automaticamente pelo TypeORM a cada save() — rastreabilidade
  // mínima para operações de bloqueio/desbloqueio (campo status mutável)
  @UpdateDateColumn()
  updatedAt: Date;
}
