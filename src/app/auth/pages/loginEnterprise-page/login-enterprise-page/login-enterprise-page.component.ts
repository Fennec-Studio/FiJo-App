import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'login-enterprise-page',
  templateUrl: './login-enterprise-page.component.html',
  styleUrls: ['./login-enterprise-page.component.css']
})
export class LoginEnterprisePageComponent {
  public loginFormModel = {
    email: '',
    password: '',
  }
  public showPassword = false

  constructor(
    private _snackBar: MatSnackBar,
    private _authService: AuthService,
    private _router: Router
  ) { }

  public onLoginSubmit(): void {
    if(this.validateData(this.loginFormModel)) {
      this._authService.validateEnterpriseLogin(this.loginFormModel).subscribe((response: any) => {
        console.log(response);
        if(response.status == 200) {
          this.openSnackBar(response.message)
          this._authService.storeDataSessionEnterprise(response.body)
          this._router.navigate(['/jobs/management'])
        } else {
          this.openSnackBar(response.message)
        }
      })
    }
  }

  validateData(data: any): boolean {
    if(data.email && data.password) {
      const emailRegex = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')
      if(!emailRegex.test(data.email)) {
        this.openSnackBar('El correo electrónico no es válido')
        return false
      }

      if(data.password.length < 8) {
        this.openSnackBar('La contraseña debe tener al menos 8 caracteres')
        return false
      }

    } else {
      this.openSnackBar('Todos los campos son requeridos')
      return false
    }

    return true
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'Aceptar', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 3000,
    })
  }

  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword
  }
}
