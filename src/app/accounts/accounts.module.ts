import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';

import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';

@NgModule({
  declarations: [
    ProfilePageComponent,
    ProfileFormComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatDialogModule,
  ],
  exports: [
    ProfilePageComponent,
  ]
})
export class AccountsModule { }
