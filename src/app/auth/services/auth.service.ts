import { Injectable } from '@angular/core';
import { UserAccount } from '../interfaces/UserAccount';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:3000';

  constructor(
    private _http: HttpClient
  ) { }

  public validateUserLogin(data: LoginModel){
    return this._http.post(`${this.baseUrl}/api/auth/login`, data)
  }

  public storeDataSession(data: UserAccount): void {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    localStorage.setItem('user', JSON.stringify(data));
    localStorage.setItem('logged', 'true');
    localStorage.setItem('session_expire', date.toISOString().slice(0, 19).replace('T', ' '));
  }

  public isSessionExpired():boolean {
    const sessionExpire = localStorage.getItem('session_expire');
    const now = new Date();
    if(now >= new Date(sessionExpire!)) {
      return true;
    }
    return false;
  }

  public logout(): void {
    localStorage.removeItem('user');
    localStorage.removeItem('logged');
    localStorage.removeItem('session_expire');
  }
}

export interface LoginModel {
  email: string;
  password: string;
}
