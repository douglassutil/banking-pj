import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

// Rotas internas do AuthModule — prefixo 'auth' é definido no AppRoutingModule.
// URL completa resultante: /auth/login
const routes: Routes = [
  { path: 'login', component: LoginComponent },
];

// Feature module de autenticação — carregado via lazy loading pelo AppRoutingModule.
// Agrupa tudo que pertence ao domínio de auth: componentes, rotas e dependências.
@NgModule({
  declarations: [
    // LoginComponent é declarado aqui — só pode ser declarado em um único módulo.
    LoginComponent,
  ],
  imports: [
    // CommonModule provê *ngIf, *ngFor etc. — em feature modules nunca importamos BrowserModule.
    CommonModule,
    // ReactiveFormsModule habilita FormGroup, FormBuilder e formControlName no template.
    ReactiveFormsModule,
    // forChild() registra rotas filhas sem reinicializar o router global (que usa forRoot()).
    RouterModule.forChild(routes),
  ],
})
export class AuthModule {}
