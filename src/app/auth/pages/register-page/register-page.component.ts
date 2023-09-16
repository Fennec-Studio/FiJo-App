import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {
  public registerFormModel = {
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
  }
  public showPassword = false
  public showconfirmPassword = false

  constructor(
    private _snackBar: MatSnackBar,
    private _router: Router,
    private _authService: AuthService
  ) { }


  ngOnInit(): void {
    if(!this._authService.isSessionExpired()) {
      this._router.navigate(['/'])
    }
  }

  public onRegisterSubmit(): void {
    if(this.validateData(this.registerFormModel)) {
      console.log('registerFormModel', this.registerFormModel);
      this._router.navigate(['/register/personal'])
    }
  }

  validateData(data: any): boolean {
    const emailRegex = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')
    const namesRegex = new RegExp('^[a-zA-ZÀ-ÿ\u00f1\u00d1 ]+$')

    if(!data.email || !data.password || !data.confirmPassword || !data.firstName || !data.lastName) {
      this.openSnackBar('Todos los campos son requeridos')
      return false
    } else {
      if(data.password !== data.confirmPassword) {
        this.openSnackBar('Las contraseñas no coinciden')
        return false
      } else {
        if(!emailRegex.test(data.email)) {
          this.openSnackBar('El correo es inválido')
          return false
        } else {
          if(!namesRegex.test(data.firstName) || !namesRegex.test(data.lastName)) {
            this.openSnackBar('Los nombres y apellidos solo pueden contener letras')
            return false
          }
        }
      }
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

  public togglePasswordVisibility(value: number): void {
    if(value === 1) {
      this.showPassword = !this.showPassword
    } else {
      this.showconfirmPassword = !this.showconfirmPassword
    }
  }
}
