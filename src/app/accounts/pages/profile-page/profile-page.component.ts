import { Component } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html'
})
export class ProfilePageComponent {
  constructor(
    private _accountService: AccountService,
    private _authService: AuthService,
    private _router: Router
  ) {}

  get AccountData() {
    return this._accountService.getAccountData();
  }

  ngOnInit(): void {
    if(this._authService.isSessionExpired()) {
      this._router.navigate(['/login'])
      this._authService.logout()
    }
  }

}
