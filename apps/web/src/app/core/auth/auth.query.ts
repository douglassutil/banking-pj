import { Injectable } from "@angular/core";
import { Query } from "@datorama/akita";
import { AuthState, AuthStore } from "./auth.store";

// Query é a camada de leitura do Akita (CQRS): expõe Observables do estado,
// nunca escreve. Componentes e Guards assinam daqui, nunca da Store diretamente.
@Injectable({ providedIn: "root" })
export class AuthQuery extends Query<AuthState> {

  // Emite o usuário logado ou null quando o estado muda
  readonly user$ = this.select(state => state.user);

  // Emite a mensagem de erro ou null (usada no template do LoginComponent)
  readonly error$ = this.select(state => state.error);

  // Atalho do Akita para o campo isLoading gerenciado internamente pela Store
  readonly isLoading$ = this.selectLoading();

  // Selector derivado: calcula isLoggedIn a partir de user, sem campo extra na Store
  readonly isLoggedIn$ = this.select(state => state.user !== null);

  // 'override' é obrigatório: AuthStore especializa o tipo genérico da classe pai
  constructor(protected override store: AuthStore) {
    super(store);
  }
}