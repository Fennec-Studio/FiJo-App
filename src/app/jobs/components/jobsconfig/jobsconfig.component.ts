import { Component } from '@angular/core';
import { AccountService } from 'src/app/accounts/services/account.service';
import { EnterpriseAccount } from 'src/app/shared/interfaces/EnterpriseAccount';

@Component({
  selector: 'app-jobs-config',
  templateUrl: './jobsconfig.component.html'
})
export class JobsconfigComponent {
  public cities: string[] = [];
  public businessInfo: EnterpriseAccount = {} as EnterpriseAccount;

  constructor(
    private _accountService: AccountService
  ) {}

  ngOnInit(): void {
    this.businessInfo = this._accountService.getBusinessData();
  }

  get stateList() {
    return this._accountService.statesList;
  }

  onChangeState(event: any) {
    this._accountService.citiesOfState(event.target.value).subscribe((data: any) => {
      this.cities = data.data
    });
  }
}
