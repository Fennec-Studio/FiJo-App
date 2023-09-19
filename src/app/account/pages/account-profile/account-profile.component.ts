import { Component } from '@angular/core';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-account-profile',
  templateUrl: './account-profile.component.html',
  styleUrls: ['./account-profile.component.css']
})
export class AccountProfileComponent {
  constructor(
    private _accountService: AccountService
  ) {}

  get AccountData() {
    return this._accountService.getAccountData();
  }
}
