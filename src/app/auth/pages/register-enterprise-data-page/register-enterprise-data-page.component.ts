import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { EnterpriseAccount } from 'src/app/shared/interfaces/EnterpriseAccount';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register-enterprise-data-page',
  templateUrl: './register-enterprise-data-page.component.html',
  styleUrls: ['./register-enterprise-data-page.component.css']
})
export class RegisterEnterpriseDataPageComponent {

  public enterpriseInfoFormModel = {
    ADDRESS: '',
    CITY: '',
    STATE: '',
    ZIPCODE: '',
    COUNTRY: '',
    PHONE: '',
    LOGO: '',
    DESCRIPTION: '',
    SOCIAL_MEDIA: ''
  }

  dataContact = {}

  constructor(
    private _snackBar: MatSnackBar,
    private _router: Router,
    private _authService: AuthService
  ) {
    this.dataContact = this._router.getCurrentNavigation()?.extras?.state?.['data'] || {};
    this.enterpriseInfoFormModel = {...this.enterpriseInfoFormModel, ...this.dataContact}
  }


  public onRegisterSubmit(): void {
    if(this.validateData(this.enterpriseInfoFormModel)) {
      console.log('registerPersonalFormModel', this.enterpriseInfoFormModel);
      this._authService.registerEnterprise(this.enterpriseInfoFormModel as EnterpriseAccount).subscribe((response: any) =>{
        this.openSnackBar(response.message)
        if(response.status == 200) {
          this._router.navigate(['/login'])
        }
      })
    }
  }


  validateData(data: any): boolean {
    const namesRegex = new RegExp('^[a-zA-ZÀ-ÿ\u00f1\u00d1 ]+$')

    if(!data.ADDRESS || !data.CITY || !data.STATE || !data.ZIPCODE || !data.COUNTRY || !data.PHONE || !data.LOGO || !data.DESCRIPTION || !data.SOCIAL_MEDIA) {
      this.openSnackBar('Todos los campos son requeridos')
      return false
    } else {
      if(data.ADDRESS.length < 5) {
        this.openSnackBar('La dirección debe tener al menos 5 caracteres')
        return false
      } else if(data.CITY.length < 3) {
        this.openSnackBar('La ciudad debe tener al menos 3 caracteres')
        return false
      } else if(data.STATE.length < 3) {
        this.openSnackBar('El estado debe tener al menos 3 caracteres')
        return false
      } else if(data.ZIPCODE.length < 4) {
        this.openSnackBar('El código postal debe tener al menos 4 caracteres')
        return false
      } else if(data.COUNTRY.length < 3) {
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
