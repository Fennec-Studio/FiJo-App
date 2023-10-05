import { Component } from '@angular/core';
import { fromEvent } from 'rxjs/internal/observable/fromEvent';
import { JobsService } from '../../../jobs/services/jobs.service';
import { AuthService } from '../../../auth/services/auth.service';
import { AccountService } from 'src/app/accounts/services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'shared-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent {
  public _authService: boolean = false;
  public gender: number = 1;
  public name: string = 'Felipe';
  public lastName: string = 'Ramirez';

  constructor(private AuthService: AuthService, private _accountService: AccountService, private Router: Router) {
    this._authService = this.AuthService.isSessionExpired();

    fromEvent(document, 'scroll').subscribe(
      event => this.scroll = (document.documentElement.scrollTop === 0) ? false : true
    );
  }

  get AccountData() {
    return this._accountService.getAccountData();
  }

  logOut() {
    this.AuthService.logout();
    this.Router.navigate(['/']);
  }

  getUserLogo() {
    let logo = '';
    const name = this.AccountData.firstName.split(' ');
    const lastName = this.AccountData.lastName.split(' ');
    logo += name[0].charAt(0);
    logo += lastName[0].charAt(0);

    return logo.toUpperCase();
  }

  public scroll: boolean = false;



  // isSesionExpired
}
