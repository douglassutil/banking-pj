import { IsEmail, IsString, MinLength } from 'class-validator';

// DTO (Data Transfer Object): define e valida o contrato de entrada do endpoint.
// O ValidationPipe global no main.ts executa essas regras antes de o controller ser chamado.
// Se qualquer regra falhar, o NestJS retorna 400 automaticamente — sem código extra.
export class LoginDto {
  // Valida formato de email — rejeita strings sem @ ou domínio inválido
  @IsEmail()
  email: string;

  // IsString garante que não é number/boolean; MinLength evita senhas triviais
  @IsString()
  @MinLength(6)
  password: string;
}