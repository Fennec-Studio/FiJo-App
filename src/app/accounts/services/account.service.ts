import { Injectable } from '@angular/core';
import { UserAccount } from 'src/app/shared/interfaces/UserAccount';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  constructor() { }

  getAccountData(): UserAccount  {
    const user = localStorage.getItem('user');
    return JSON.parse(user!);
  }
}
