import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    // Redireciona a raiz para /auth/login ao inicializar a app.
    // pathMatch: 'full' garante que o redirect só ocorre quando a URL é exatamente ''.
    // Sem 'full', '' casaria com qualquer rota (toda URL começa com string vazia).
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full',
  },
  {
    // Prefixo 'auth' — o AuthModule define as rotas filhas (ex: 'login').
    // URL completa resultante: /auth/login
    path: 'auth',
    // Lazy loading: o bundle do AuthModule só é baixado quando o usuário
    // navegar para /auth pela primeira vez — reduz o bundle inicial da app.
    // dynamic import retorna o módulo completo; .then seleciona a classe exportada.
    loadChildren: () =>
      import('./features/auth/auth.module').then(m => m.AuthModule),
  },
];

// forRoot(): inicializa o router uma única vez na app — apenas no AppRoutingModule.
// Feature modules usam forChild() para registrar rotas filhas sem reinicializar o router.
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
