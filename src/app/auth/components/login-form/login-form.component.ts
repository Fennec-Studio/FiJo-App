import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html'
})
export class LoginFormComponent {
  public loginFormModel = {
    email: '',
    password: '',
  }
  public showPassword = false

  constructor(
    private _snackBar: MatSnackBar
  ) { }

  public onLoginSubmit(): void {
    if(this.validateData(this.loginFormModel)) {
      console.log('loginFormModel', this.loginFormModel);
      //TODO send data to server
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
      duration: 5000,
    })
  }

  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword
  }
}
