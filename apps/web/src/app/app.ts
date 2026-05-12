import { Component } from '@angular/core';

// Componente raiz da aplicação — apenas provê o <router-outlet> no template.
// Não contém lógica: toda navegação é gerenciada pelo AppRoutingModule.
@Component({
  standalone: false,
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
