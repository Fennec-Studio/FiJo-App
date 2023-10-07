import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { dataJob } from "../interface/jobs.interface";
import { BehaviorSubject } from "rxjs";
import { JobsInfo } from "src/app/shared/interfaces/JobsInfo";

@Injectable({
  providedIn: 'root',
})

export class JobsService {
  private baseUrl = 'http://api.fijo.site';
  // private baseUrl = 'http://localhost:3000';

  public idJob = new BehaviorSubject<number>(0);

  constructor(
    private _http: HttpClient
  ) { }

  public getJobs(){
    return this._http.get(`${this.baseUrl}/jobs`)
  }

  public getJobsByBusinessID(id: number){
    return this._http.get(`${this.baseUrl}/jobs/${id}`)
  }

  public getIDBusiness(): number {
    let data = localStorage.getItem('user');
    return JSON.parse(data!).buid;
  }

  public inputJobList(): JobsInfo[] {
    let data: JobsInfo[] = [];
    this.getJobs().subscribe((res: any) => {
      data = res.body;
    })
    return data;
  }
}
