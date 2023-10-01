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

@NgModule({
  declarations: [
    LoginPageComponent,
    RegisterPageComponent,
    LoginFormComponent,
    RegisterPersonalComponent
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
