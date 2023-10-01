import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { SharedModule } from '../shared/shared.module';
import { JobsPageComponent } from '../jobs/pages/jobs-page/jobs-page.component';
import { AuthModule } from '../auth/auth.module';

@NgModule({
  declarations: [
    LandingPageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    AuthModule
  ],
  exports: [
    LandingPageComponent,
  ]
})
export class LandingModule { }
