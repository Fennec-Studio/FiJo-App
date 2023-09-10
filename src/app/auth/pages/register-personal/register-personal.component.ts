import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-personal',
  templateUrl: './register-personal.component.html',
  styleUrls: ['./register-personal.component.css']
})
export class RegisterPersonalComponent {
  public personalInfoFormModel = {
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    phone: '',
    role: 1,
  }

  constructor(
    private _snackBar: MatSnackBar,
    private _router: Router,
  ) { }


  public onRegisterSubmit(): void {
    if(this.validateData(this.personalInfoFormModel)) {
      console.log('registerPersonalFormModel', this.personalInfoFormModel);
      // this._router.navigate(['/home'])
    }
  }


  validateData(data: any): boolean {
    const namesRegex = new RegExp('^[a-zA-ZÀ-ÿ\u00f1\u00d1 ]+$')

    if(!data.address || !data.city || !data.state || !data.zipCode || !data.country) {
      this.openSnackBar('Todos los campos son requeridos')
      return false
    } else {
      if(data.address.length < 5) {
        this.openSnackBar('La dirección debe tener al menos 5 caracteres')
        return false
      } else if(data.city.length < 3) {
        this.openSnackBar('La ciudad debe tener al menos 3 caracteres')
        return false
      } else if(data.state.length < 3) {
        this.openSnackBar('El estado debe tener al menos 3 caracteres')
        return false
      } else if(data.zipCode.length < 4) {
        this.openSnackBar('El código postal debe tener al menos 4 caracteres')
        return false
      } else if(data.country.length < 3) {
        this.openSnackBar('El país debe tener al menos 3 caracteres')
        return false
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
}
