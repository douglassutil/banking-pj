import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthQuery } from "./auth.query";

// @Injectable() sem providedIn porque este interceptor é registrado manualmente
// no CoreModule via token HTTP_INTERCEPTORS — não pelo injetor raiz.
@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  // AuthQuery é injetada para leitura síncrona do token via getValue().
  // Não usamos Observable aqui porque precisamos do token no momento exato da requisição.
  constructor(private authQuery: AuthQuery) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authQuery.getValue().token;

    // Se não há token (usuário não logado), a requisição passa sem modificação.
    // Isso cobre rotas públicas como POST /auth/login.
    if (!token) {
      return next.handle(req);
    }

    // HttpRequest é imutável — clone() cria uma cópia com o header adicionado.
    // setHeaders adiciona sem sobrescrever outros headers já presentes na requisição.
    const authReq = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` },
    });

    // Passa a cópia modificada para o próximo handler da cadeia (ou para o backend).
    return next.handle(authReq);
  }
}
