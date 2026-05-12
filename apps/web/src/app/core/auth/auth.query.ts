import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { Observable } from 'rxjs';
import { AuthState, AuthStore, AuthUser } from './auth.store';

// Query é a camada de leitura do Akita (CQRS): expõe Observables do estado,
// nunca escreve. Componentes e Guards assinam daqui, nunca da Store diretamente.
@Injectable({ providedIn: 'root' })
export class AuthQuery extends Query<AuthState> {

  // Tipagem explícita necessária com ES2022 (useDefineForClassFields: true):
  // sem inicializador inline, o TypeScript exige a declaração do tipo aqui.
  readonly user$: Observable<AuthUser | null>;
  readonly error$: Observable<string | null>;
  readonly isLoading$: Observable<boolean>;
  readonly isLoggedIn$: Observable<boolean>;

  constructor(protected override store: AuthStore) {
    // super() inicializa o _select interno do Akita.
    // Com ES2022, inicializadores de propriedade rodam ANTES do corpo do construtor,
    // por isso this.select() só pode ser chamado aqui — após super(store).
    super(store);

    // Emite o usuário logado ou null quando o estado muda.
    this.user$ = this.select(state => state.user);

    // Emite a mensagem de erro ou null (usada no template do LoginComponent).
    this.error$ = this.select(state => state.error);

    // Atalho do Akita para o campo isLoading gerenciado internamente pela Store.
    this.isLoading$ = this.selectLoading();

    // Selector derivado: calcula isLoggedIn a partir de user, sem campo extra na Store.
    this.isLoggedIn$ = this.select(state => state.user !== null);
  }
}
