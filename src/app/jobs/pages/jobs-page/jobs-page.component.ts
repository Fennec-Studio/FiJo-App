import { JobsService } from './../../services/jobs.service';
import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState, MediaMatcher } from '@angular/cdk/layout';
import { dataJob } from '../../interface/jobs.interface';

@Component({
  templateUrl: './jobs-page.component.html',
  styleUrls: ['./jobs-page.component.css']
})
export class JobsPageComponent {

  public sizeDisplay: string = 'mobile' || 'desktop';

  // Aqui se van a meter la lista de empleos que me manden del backend

  public inputJobList: dataJob[] = [

  ]

  // public inputImgJob: String = "";
  // public inputJobTitle: String = "";
  // public inputJobPayment: number = 0;
  // public inputJobFrecuencyPayment: String = "";
  // public inputJobLocation: String = "";
  // public inputJobEnterprise: String = "";
  // public inputJobContractType: String = "";
  // public inputJobTime: String = "";
  // public inputJobType: String = "";
  // public inputJobEnterpriseRate: number = 0;
  // public inputJobDescription: String = "";

  // Aqui se va a meter el empleo que haga click
  public idJob: number = 0;

  public recieveDataCard(job: number) {
    console.log("Llamada a recieveDataCard");
  }

  constructor( public breakpointObserver: BreakpointObserver, public MediaMatcher: MediaMatcher, private JobsService: JobsService){
    this.mediaQuery();
    this.inputJobList = this.JobsService.inputJobList;
  }

  public inputJobData: dataJob = this.inputJobList[this.idJob];


  public mediaQuery() {
    this.breakpointObserver
      .observe(['(min-width: 0px) and (max-width: 1023px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.sizeDisplay = 'mobile';
          console.log('Small');
        }
      }
    );
    this.breakpointObserver
      .observe(['(min-width: 1024px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.sizeDisplay = 'desktop';
          console.log('Web');
        }
      }
    );
  }
}
