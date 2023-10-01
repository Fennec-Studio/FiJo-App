import { Component } from '@angular/core';
import { AccountService } from 'src/app/accounts/services/account.service';

@Component({
  selector: 'app-jobs-config',
  templateUrl: './jobsconfig.component.html'
})
export class JobsconfigComponent {
  public cities: string[] = [];
  constructor(
    private _accountService: AccountService
  ) {}

  get stateList() {
    return this._accountService.statesList;
  }

  onChangeState(event: any) {
    this._accountService.citiesOfState(event.target.value).subscribe((data: any) => {
      this.cities = data.data
    });
  }
}
