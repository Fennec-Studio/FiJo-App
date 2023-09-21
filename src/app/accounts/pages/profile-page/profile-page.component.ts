import { Component } from '@angular/core';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html'
})
export class ProfilePageComponent {
  constructor(
    private _accountService: AccountService
  ) {}

get AccountData() {
  return this._accountService.getAccountData();
}

}
