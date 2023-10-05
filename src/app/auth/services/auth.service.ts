import { Injectable } from '@angular/core';
import { UserAccount } from '../../shared/interfaces/UserAccount';
import { HttpClient } from '@angular/common/http';
import { EnterpriseAccount } from 'src/app/shared/interfaces/EnterpriseAccount';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://api.fijo.site';

  constructor(
    private _http: HttpClient
  ) { }

  public validateUserLogin(data: LoginModel){
    return this._http.post(`${this.baseUrl}/auth/login`, data)
  }

  public registerUser(data: UserAccount){
    return this._http.post(`${this.baseUrl}/auth/register`, data)
  }

  public validateEnterpriseLogin(data: LoginModel){
    return this._http.post(`${this.baseUrl}/auth/companies/login`, data)
  }

  public registerEnterprise(data: EnterpriseAccount){
    return this._http.post(`${this.baseUrl}/auth/companies/insert`, data)
  }

  public storeDataSession(data: UserAccount): void {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    localStorage.setItem('user', JSON.stringify(data));
    localStorage.setItem('logged', 'true');
    localStorage.setItem('session_expire', date.toISOString().slice(0, 19).replace('T', ' '));
    localStorage.setItem('user_type', '1');
  }

  public storeDataSessionEnterprise(data: EnterpriseAccount): void {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    localStorage.setItem('user', JSON.stringify(data));
    localStorage.setItem('logged', 'true');
    localStorage.setItem('session_expire', date.toISOString().slice(0, 19).replace('T', ' '));
    localStorage.setItem('user_type', '2');
  }

  public isSessionExpired():boolean {
    const sessionExpire = localStorage.getItem('session_expire');
    const now = new Date();
    if(now >= new Date(sessionExpire!)) {
      return true;
    }
    return false;
  }

  public accountType(): number {
    return parseInt(localStorage.getItem('user_type')!);
  }

  public logout(): void {
    localStorage.removeItem('user');
    localStorage.removeItem('logged');
    localStorage.removeItem('session_expire');
    localStorage.removeItem('user_type');
  }
}

export interface LoginModel {
  email: string;
  password: string;
}
