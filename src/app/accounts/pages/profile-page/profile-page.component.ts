import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { AccountService } from '../../services/account.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ProfileFormComponent } from '../../components/profile-form/profile-form.component';
import { UserAccount } from 'src/app/shared/interfaces/UserAccount';
@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html'
})
export class ProfilePageComponent {
  public profileData: UserAccount = {} as UserAccount;

  constructor(
    private _accountService: AccountService,
    private _authService: AuthService,
    private _router: Router,
    private _dialogRef: MatDialog
  ) {}

  AccountData() {
    this._accountService.getProfileData(this._accountService.getAccountUUID()).subscribe((data: any) => {
      this.profileData = data.body;
    })
  }

  getUserLogo() {
    let logo = '';
    if (this.profileData.firstName && this.profileData.lastName) {
      const name = this.profileData.firstName.split(' ');
      const lastName = this.profileData.lastName.split(' ');
      logo += name[0].charAt(0);
      logo += lastName[0].charAt(0);
    } else {
      logo += '';
    }
    return logo.toUpperCase();
  }

  ngOnInit(): void {
    if(this._authService.isSessionExpired()) {
      this._router.navigate(['/login'])
      this._authService.logout()
    } else {
      if(this._authService.accountType() == 2){
        this._router.navigate(['/jobs/management'])
      }
      this.AccountData();
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
