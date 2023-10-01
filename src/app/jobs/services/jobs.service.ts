import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  private baseUrl = 'http://api.fijo.site';

  constructor(
    private _http: HttpClient
  ) { }

  public getJobs(){
    return this._http.get(`${this.baseUrl}/api/jobs/getall`)
  }
}
