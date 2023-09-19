import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountProfileComponent } from './pages/account-profile/account-profile.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AccountProfileComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    AccountProfileComponent
  ]
})
export class AccountModule { }
