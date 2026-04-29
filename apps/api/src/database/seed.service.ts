import { Injectable, Logger, OnApplicationBootstrap } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "../users/user.entity";
import { ConfigService } from "@nestjs/config";
import { UserRole } from '@banking-pj/shared-types';
import * as bcrypt from 'bcrypt';

// Seed de usuários: popula o banco com dados iniciais de desenvolvimento.
// Implementa OnApplicationBootstrap para executar automaticamente ao subir o servidor.
@Injectable()
export class UserSeedService implements OnApplicationBootstrap {

  // Logger do NestJS: exibe mensagens prefixadas com o nome da classe no console
  private readonly logger = new Logger(UserSeedService.name);

  constructor(
    // @InjectRepository: instrui o NestJS a injetar o repositório TypeORM da entidade User.
    // Só funciona se TypeOrmModule.forFeature([User]) estiver importado no módulo deste serviço.
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly config: ConfigService,
  ) { }

  // onApplicationBootstrap: chamado pelo NestJS após todos os módulos serem inicializados.
  // É o momento certo para seeds — todos os repositórios e conexões já estão prontos.
  async onApplicationBootstrap(): Promise<void> {
    // Executa apenas em desenvolvimento — nunca em produção ou testes automatizados
    if (this.config.get("NODE_ENV") !== "development") return;

    // Verificação de idempotência: se já existem usuários, o seed já rodou antes.
    // Sem essa checagem, cada reinício do servidor duplicaria os dados.
    const existingUsers = await this.userRepository.count();
    if (existingUsers > 0) {
      this.logger.log("Seed já executado. Pulando.");
      return;
    }

    // bcrypt.hash(senha, saltRounds): gera o hash da senha com fator de custo 10.
    // Nunca armazenamos senha em texto puro — apenas o hash resultante.
    // saltRounds=10 é o padrão recomendado: seguro e rápido o suficiente para dev.
    await this.userRepository.save([
      {
        name: "Admin User",
        email: "admin@banking.dev",       // credencial de acesso: ADMIN
        passwordHash: await bcrypt.hash('Password@123', 10),
        role: UserRole.ADMIN,
        // companyId fixo: identifica a empresa fictícia usada em todos os testes manuais
        companyId: "00000000-0000-0000-0000-000000000001",
      },
      {
        name: "João Portador",
        email: "user@banking.dev",        // credencial de acesso: CARDHOLDER
        passwordHash: await bcrypt.hash('Password@123', 10),
        role: UserRole.CARDHOLDER,
        companyId: "00000000-0000-0000-0000-000000000001",
      },
    ]);

    this.logger.log("Seed concluído: admin@banking.dev e user@banking.dev criados.");
  }
}