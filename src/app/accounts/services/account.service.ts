import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnterpriseAccount } from 'src/app/shared/interfaces/EnterpriseAccount';
import { UserAccount } from 'src/app/shared/interfaces/UserAccount';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  // private urlBase = `http://localhost:3000/`
  private urlBase = `http://api.fijo.site`

  public statesList: string[] = [
    'Aguascalientes', 'Baja California', 'Baja California Sur',
    'Campeche', 'Chiapas', 'Chihuahua',
    'Ciudad de México', 'Coahuila', 'Colima',
    'Durango', 'Estado de México', 'Guanajuato',
    'Guerrero', 'Hidalgo', 'Jalisco',
    'Michoacán de Ocampo', 'Morelos', 'Nayarit',
    'Nuevo León', 'Oaxaca', 'Puebla',
    'Querétaro', 'Quintana Roo', 'San Luis Potosí',
    'Sinaloa', 'Sonora', 'Tabasco',
    'Tamaulipas', 'Tlaxcala', 'Veracruz',
    'Yucatán', 'Zacatecas'
  ]

  constructor(
    private _http: HttpClient,
  ) { }

  public citiesOfState(state: string) {
    return this._http.post('https://countriesnow.space/api/v0.1/countries/state/cities', { "country": "Mexico", "state": state });
  }

  getProfileData(id: number) {
    return this._http.get(`${this.urlBase}user/profile?id=${id}`);
  }

  getAccountData(): any  {
      const user = localStorage.getItem('user');
      const uuid = JSON.parse(user!).uuid;
      return JSON.parse(user!);
  }

  getAccountUUID(): number {
    const user = localStorage.getItem('user');
    const uuid = JSON.parse(user!).uuid;
    return uuid;
  }

  public getBusinessData(): EnterpriseAccount {
    return JSON.parse(localStorage.getItem('user')!);
  }
}
