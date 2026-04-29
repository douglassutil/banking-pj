import { Injectable } from "@angular/core";
import { UserRole } from "@banking-pj/shared-types";
import { Store, StoreConfig } from "@datorama/akita";

// Representa os dados do usuário autenticado que ficam em memória após o login.
// Espelha o shape retornado pelo backend em POST /auth/login → user.
export interface AuthUser {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  companyId: string;
}

// Define o contrato completo do estado de autenticação.
// Qualquer parte da app que precisar de dados de auth lê daqui via AuthQuery.
export interface AuthState {
  token: string | null;      // JWT retornado pelo backend; null = não autenticado
  user: AuthUser | null;     // dados do usuário logado; null = não autenticado
  isLoading: boolean;        // true durante a requisição de login (desabilita o botão)
  error: string | null;      // mensagem de erro exibida no formulário; null = sem erro
}

// Função (não constante) porque o Akita chama createInitialState()
// ao resetar o store — garantindo que cada reset parte de um objeto novo,
// sem risco de compartilhar referências entre resets.
function createInitialState(): AuthState {
  return {
    token: null,
    user: null,
    isLoading: false,
    error: null,
  };
}

// @StoreConfig: registra o store com um nome único usado pelo Akita DevTools
// e como chave interna do gerenciador de estado global.
// Store<AuthState>: herda update(), reset() e outros métodos do Akita.
// A Facade é a única que deve chamar update() — nunca componentes diretamente.
@Injectable({ providedIn: "root" })
@StoreConfig({ name: "auth" })
export class AuthStore extends Store<AuthState> {
  constructor() {
    // super(): inicializa o store com o estado padrão.
    // A partir daqui, qualquer subscriber da AuthQuery começa a receber valores.
    super(createInitialState());
  }
}
