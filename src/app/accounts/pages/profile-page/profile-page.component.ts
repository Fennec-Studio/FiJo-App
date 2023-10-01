import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { AccountService } from '../../services/account.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ProfileFormComponent } from '../../components/profile-form/profile-form.component';
@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html'
})
export class ProfilePageComponent {
  constructor(
    private _accountService: AccountService,
    private _authService: AuthService,
    private _router: Router,
    private _dialogRef: MatDialog
  ) {}

  get AccountData() {
    return this._accountService.getAccountData();
  }

  getUserLogo() {
    let logo = '';
    const name = this.AccountData.firstName.split(' ');
    const lastName = this.AccountData.lastName.split(' ');
    logo += name[0].charAt(0);
    logo += lastName[0].charAt(0);

    return logo.toUpperCase();
  }

  ngOnInit(): void {
    console.log(this.AccountData);
    if(this._authService.isSessionExpired()) {
      this._router.navigate(['/login'])
      this._authService.logout()
    }
  }

  openDialog(type: number) {
    const dialogRef = this._dialogRef.open(ProfileFormComponent, {
      data: {
        type,
        user: this.AccountData
      },
      width: '600px',
    })

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        //TODO - Update account data
      }
    })
  }

}
