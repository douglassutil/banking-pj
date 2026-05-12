import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { CoreModule } from './core/core.module';
import { App } from './app';

// AppModule é o módulo raiz da aplicação — importado uma única vez pelo bootstrap.
// Responsabilidade: declarar o componente raiz e importar os módulos globais.
@NgModule({
  declarations: [
    // App é o componente raiz; todos os outros componentes são filhos dele na árvore.
    App,
  ],
  imports: [
    // BrowserModule provê o runtime do Angular no browser (NgIf, NgFor, sanitização de DOM).
    // Deve ser importado apenas aqui no AppModule — feature modules usam CommonModule.
    BrowserModule,

    // CoreModule provisiona HttpClient, TokenInterceptor e demais serviços singleton.
    // Deve ser importado apenas no AppModule para garantir instância única (singleton).
    CoreModule,

    // AppRoutingModule registra as rotas da aplicação e provê RouterOutlet e RouterLink.
    AppRoutingModule,
  ],
  providers: [
    // Captura erros JavaScript não tratados no browser e os encaminha ao ErrorHandler.
    // Introduzido no Angular 19 como substituto do handler global de zona.
    provideBrowserGlobalErrorListeners(),
  ],
  // Define o componente que o Angular renderiza ao inicializar a aplicação.
  bootstrap: [App],
})
export class AppModule {}
