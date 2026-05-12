import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthFacade } from '../../../core/auth/auth.facade';

@Component({
  // standalone: false obrigatório no Angular 19+ para componentes declarados em NgModules.
  standalone: false,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  // OnPush: Angular só re-renderiza quando um Observable emite (async pipe) ou evento DOM ocorre.
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {

  // Tipagem explícita necessária no ES2022: sem inicializador inline,
  // o TypeScript exige que o tipo seja declarado aqui.
  form: FormGroup;
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;

  constructor(
    private fb:     FormBuilder,
    private facade: AuthFacade,
  ) {
    // Inicialização no construtor garante que this.fb e this.facade já existem.
    // Com ES2022 (native class fields), inicializadores de propriedade rodam
    // antes do corpo do construtor — por isso não podemos usar form = this.fb.group() fora daqui.
    this.form = this.fb.group({
      email:    ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    // Expõe os Observables da Facade — consumidos no template via async pipe.
    // O componente não assina diretamente: sem subscribe(), sem risco de memory leak.
    this.isLoading$ = this.facade.isLoading$;
    this.error$     = this.facade.error$;
  }

  onSubmit(): void {
    // Defesa: impede o disparo se algum campo for inválido (ex: botão ativado por Enter).
    if (this.form.invalid) return;

    const { email, password } = this.form.value;
    // ! (non-null assertion): seguro aqui porque o guard acima garante que os valores existem.
    this.facade.login(email!, password!);
  }
}
