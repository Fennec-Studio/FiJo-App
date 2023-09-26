import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './auth/pages/login-page/login-page.component';
import { RegisterPageComponent } from './auth/pages/register-page/register-page.component';
import { LandingPageComponent } from './landing/pages/landing-page/landing-page.component';
import { RegisterPersonalComponent } from './auth/pages/register-personal/register-personal.component';
import { ProfilePageComponent } from './accounts/pages/profile-page/profile-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'register/personal', component: RegisterPersonalComponent },
  { path: 'account/profile', component: ProfilePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
