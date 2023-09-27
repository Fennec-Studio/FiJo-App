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

  ngOnInit(): void {
    if(this._authService.isSessionExpired()) {
      this._router.navigate(['/login'])
      this._authService.logout()
    }
  }

  openDialog(type: number) {
    const dialogRef = this._dialogRef.open(ProfileFormComponent, {
      data: {
        type
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
