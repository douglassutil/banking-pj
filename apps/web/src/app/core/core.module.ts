import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { TokenInterceptor } from "./auth/token.interceptor";

// CoreModule é importado uma única vez no AppModule (singleton).
// Responsabilidade: provisionar infraestrutura transversal (HTTP, interceptors, guards globais).
@NgModule({
  providers: [
    // withInterceptorsFromDi() habilita interceptors registrados via HTTP_INTERCEPTORS.
    // Sem esse argumento, o Angular 15+ ignora silenciosamente interceptors baseados em classe.
    provideHttpClient(withInterceptorsFromDi()),

    // multi: true adiciona o interceptor à lista existente em vez de substituí-la.
    // A ordem de registro aqui define a ordem de execução nas requisições.
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {}
