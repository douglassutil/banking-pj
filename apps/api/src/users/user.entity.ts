// Alias configurado em tsconfig.json — evita caminhos relativos frágeis (../../..)
import { UserRole } from '@banking-pj/shared-types';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

// @Entity('users') instrui o TypeORM a mapear essa classe para a tabela 'users'.
// Com synchronize: true no AppModule, o TypeORM cria a tabela automaticamente ao iniciar.
@Entity('users')
export class User {
  // UUID gerado pelo banco — nunca definido manualmente pelo código da aplicação
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // unique: true cria um índice único no banco — dois usuários não podem ter o mesmo email
  @Column({ unique: true })
  email: string;

  // Armazena apenas o hash da senha (bcrypt). A senha em texto puro NUNCA é persistida.
  @Column()
  passwordHash: string;

  @Column()
  name: string;

  // type: 'enum' faz o PostgreSQL validar os valores permitidos no nível do banco.
  // default: CARDHOLDER — perfil padrão ao criar um usuário sem especificar role.
  @Column({ type: 'enum', enum: UserRole, default: UserRole.CARDHOLDER })
  role: UserRole;

  // Isolamento multi-tenant: toda query deve filtrar por companyId para garantir
  // que um usuário nunca veja dados de outra empresa. Ver ADR 007.
  @Column('uuid')
  companyId: string;

  // Preenchido automaticamente pelo TypeORM na criação — nunca setar manualmente
  @CreateDateColumn()
  createdAt: Date;

  // Atualizado automaticamente pelo TypeORM a cada save()
  @UpdateDateColumn()
  updatedAt: Date;
}