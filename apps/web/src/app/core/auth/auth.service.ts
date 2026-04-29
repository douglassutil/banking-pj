import { UserRole } from '@banking-pj/shared-types';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

interface LoginResponse {
  accessToken: string;
  user: {
    id: string;
    email: string;
    name: string;
    role: UserRole;
    companyId: string;
  };
}

@Injectable({ providedIn: "root" })
export class AuthService {
  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>("/api/auth/login", { email, password });
  }
}