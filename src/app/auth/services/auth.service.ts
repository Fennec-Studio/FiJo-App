import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserAccount } from '../interfaces/UserAccount';


@Injectable({providedIn: 'root'})
export class AuthService {
  private userAccountData: UserAccount = {} as UserAccount;

  constructor(
    private _http: HttpClient
  ) { }

}
