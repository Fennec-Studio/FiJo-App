import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAccount } from 'src/app/shared/interfaces/UserAccount';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  public statesList: string[] = [
    'Aguascalientes', 'Baja California', 'Baja California Sur',
    'Campeche', 'Chiapas', 'Chihuahua',
    'Ciudad de México', 'Coahuila de Zaragoza', 'Colima',
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

  getAccountData(): UserAccount  {
    const user = localStorage.getItem('user');
    return JSON.parse(user!);
  }
}
