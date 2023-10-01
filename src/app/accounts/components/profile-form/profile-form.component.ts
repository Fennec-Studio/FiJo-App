import { Component, Inject } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent {
  public cities: string[] = [];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
    private _accountService: AccountService
  ) {}

  closeDialog() {
    this.dialog.closeAll()
  }

  get stateList() {
    return this._accountService.statesList;
  }

  onChangeState(event: any) {
    this._accountService.citiesOfState(event.target.value).subscribe((data: any) => {
      this.cities = data.data
    });
  }

  saveData() {
    //TODO - Save data
  }
}
