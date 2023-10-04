import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { MatSnackBarModule } from '@angular/material/snack-bar';

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { RouterModule } from '@angular/router';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterPersonalComponent } from './pages/register-personal/register-personal.component';
import { AuthService } from './services/auth.service';
import { LoginEnterprisePageComponent } from './pages/loginEnterprise-page/login-enterprise-page/login-enterprise-page.component';
import { RegisterEnterprisePageComponent } from './pages/register-enterprise-page/register-enterprise-page.component';
import { RegisterEnterpriseDataPageComponent } from './pages/register-enterprise-data-page/register-enterprise-data-page.component';

@NgModule({
  declarations: [
    LoginPageComponent,
    RegisterPageComponent,
    LoginFormComponent,
    RegisterPersonalComponent,
    LoginEnterprisePageComponent,
    RegisterEnterprisePageComponent,
    RegisterEnterpriseDataPageComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MatSnackBarModule,
    RouterModule
  ],
  exports: [
    LoginPageComponent,
    LoginFormComponent
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
