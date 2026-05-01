import { Injectable } from "@angular/core";
import { AuthStore } from "./auth.store";
import { AuthService } from "./auth.service";
import { AuthQuery } from "./auth.query";
import { Router } from "@angular/router";

// Facade é o único ponto de contato dos componentes com o domínio de auth.
// Ela orquestra: leitura via Query, escrita via Store, HTTP via Service.
@Injectable({ providedIn: "root" })
export class AuthFacade {

  // Getters delegam os Observables da Query — componentes importam só a Facade.
  // Usamos get (e não readonly) porque as dependências só existem após o construtor.
  get user$()       { return this.query.user$; }
  get isLoading$()  { return this.query.isLoading$; }
  get error$()      { return this.query.error$; }
  get isLoggedIn$() { return this.query.isLoggedIn$; }

  constructor(
    private store:   AuthStore,    // escrita de estado
    private query:   AuthQuery,    // leitura de estado
    private service: AuthService,  // chamadas HTTP
    private router:  Router        // navegação pós-login/logout
  ) { }

  login(email: string, password: string): void {
    // Ativa spinner e limpa erro anterior antes de disparar a requisição
    this.store.setLoading(true);
    this.store.update({ error: null });

    this.service.login(email, password).subscribe({
      next: (response) => {
        // Grava o usuário no estado e redireciona para o dashboard
        this.store.update({ user: response.user });
        this.store.setLoading(false);
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        // ?? (nullish coalescing): usa a mensagem da API se existir, senão usa o fallback
        const message = err?.error?.message ?? 'Erro ao fazer login.';
        this.store.update({ error: message });
        this.store.setLoading(false);
      },
    });
  }

  logout(): void {
    // Limpa o estado em memória — o token no localStorage será tratado pelo TokenInterceptor
    this.store.update({ user: null, error: null });
    this.router.navigate(['/auth/login']);
  }
}