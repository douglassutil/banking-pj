# 04-convencoes.md — Nomenclatura e Convenções

> Seguir essas convenções garante que qualquer pessoa (ou você daqui 3 meses)
> entenda o código sem precisar de explicação.

---

## Arquivos e pastas

| O que é          | Convenção de nome              | Exemplo                        |
|------------------|-------------------------------|--------------------------------|
| Componente       | `kebab-case.ts`               | `card-item.ts`                 |
| Módulo           | `kebab-case.module.ts`        | `cards.module.ts`              |
| Serviço          | `kebab-case.service.ts`       | `auth.service.ts`              |
| Guard            | `kebab-case.guard.ts`         | `auth.guard.ts`                |
| Interceptor      | `kebab-case.interceptor.ts`   | `token.interceptor.ts`         |
| Pipe             | `kebab-case.pipe.ts`          | `currency-brl.pipe.ts`         |
| Entidade         | `kebab-case.entity.ts`        | `user.entity.ts`               |
| DTO              | `kebab-case.dto.ts`           | `login.dto.ts`                 |
| Store (Akita)    | `kebab-case.store.ts`         | `auth.store.ts`                |
| Query (Akita)    | `kebab-case.query.ts`         | `auth.query.ts`                |
| Facade           | `kebab-case.facade.ts`        | `auth.facade.ts`               |
| Spec             | mesmo nome + `.spec.ts`       | `auth.service.spec.ts`         |

---

## Classes TypeScript

| O que é         | Convenção               | Exemplo             |
|-----------------|-------------------------|---------------------|
| Componente      | PascalCase + Component  | `CardItemComponent` |
| Módulo          | PascalCase + Module     | `CardsModule`       |
| Serviço         | PascalCase + Service    | `AuthService`       |
| Guard           | PascalCase + Guard      | `AuthGuard`         |
| Interceptor     | PascalCase + Interceptor| `TokenInterceptor`  |
| Entidade TypeORM| PascalCase (sem sufixo) | `User`, `Card`      |
| DTO             | PascalCase + Dto        | `LoginDto`          |
| Store (Akita)   | PascalCase + Store      | `AuthStore`         |
| Query (Akita)   | PascalCase + Query      | `AuthQuery`         |
| Facade          | PascalCase + Facade     | `AuthFacade`        |
| Interface       | PascalCase (sem I)      | `AuthState`         |
| Enum            | PascalCase              | `CardStatus`        |

---

## Seletores CSS (BEM obrigatório)

```scss
// Bloco
.card-item { }

// Elemento (parte do bloco)
.card-item__title { }
.card-item__badge { }
.card-item__actions { }

// Modificador (variação do bloco ou elemento)
.card-item--blocked { }
.card-item__badge--active { }
.card-item__badge--expired { }
```

**Regra:** nunca usar valores hardcoded no CSS — sempre variáveis SASS.
```scss
// ❌ errado
.card-item { color: #9e9e9e; padding: 16px; }

// ✅ correto
.card-item { color: $color-gray-500; padding: $spacing-4; }
```

---

## Estrutura de um componente Angular (padrão deste projeto)

```typescript
// 1. Imports Angular
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

// 2. Imports de tipos compartilhados
import { CardStatus } from '@banking-pj/shared-types';

// 3. Decorator com OnPush obrigatório em Dumb Components
@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.html',
  styleUrls: ['./card-item.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardItemComponent {
  // 4. Inputs antes de Outputs
  @Input() card!: CardView;
  @Input() isLoading = false;

  // 5. Outputs como EventEmitter tipado
  @Output() block = new EventEmitter<string>();
  @Output() unblock = new EventEmitter<string>();

  // 6. Métodos públicos para o template
  onBlock(): void {
    this.block.emit(this.card.id);
  }
}
```

---

## Estrutura de um módulo de feature

```typescript
@NgModule({
  declarations: [
    CardListPageComponent,  // componente Smart
    CardItemComponent,      // componente Dumb
  ],
  imports: [
    CommonModule,
    CardsRoutingModule,
    SharedModule,           // componentes compartilhados
  ],
  providers: [
    CardsStore,             // Store Akita
    CardsQuery,             // Query Akita
    CardsFacade,            // Facade
  ],
})
export class CardsModule {}
```

---

## Separação Smart vs Dumb Components

**Smart Component** (também chamado Container):
- Conhece a Facade e lê do estado
- Passa dados para os Dumb via `@Input`
- Recebe eventos dos Dumb via `@Output` e chama a Facade
- Um por página/rota

**Dumb Component** (também chamado Presentational):
- Só recebe `@Input` e emite `@Output`
- Não conhece Facade, Service nem Store
- `ChangeDetectionStrategy.OnPush` obrigatório
- Reutilizável em qualquer contexto

```
CardsModule
  CardListPageComponent (Smart) ←→ CardsFacade ←→ CardsStore
        │
        ├── CardItemComponent (Dumb) — recebe `card` via @Input
        └── StatusBadgeComponent (Dumb) — recebe `status` via @Input
```
