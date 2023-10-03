import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './auth/pages/login-page/login-page.component';
import { RegisterPageComponent } from './auth/pages/register-page/register-page.component';
import { LandingPageComponent } from './landing/pages/landing-page/landing-page.component';
import { JobsPageComponent } from './jobs/pages/jobs-page/jobs-page.component';
import { RegisterPersonalComponent } from './auth/pages/register-personal/register-personal.component';
import { ProfilePageComponent } from './accounts/pages/profile-page/profile-page.component';
import { JobsPageManagementComponent } from './jobs/pages/jobs-page-management/jobs-page-management.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: '/login', component: LoginPageComponent },
  { path: '/register', component: RegisterPageComponent },
  { path: '/jobs/management', component: JobsPageManagementComponent},
  { path: '/jobs', component: JobsPageComponent},
  { path: '/register/personal', component: RegisterPersonalComponent },
  { path: '/account/profile', component: ProfilePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
