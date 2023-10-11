import { JobsService } from './../../services/jobs.service';
import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState, MediaMatcher } from '@angular/cdk/layout';
import { JobsInfo } from 'src/app/shared/interfaces/JobsInfo';

@Component({
  templateUrl: './jobs-page.component.html',
  styleUrls: ['./jobs-page.component.css']
})
export class JobsPageComponent {
  public sizeDisplay: string = 'mobile' || 'desktop';
  public inputJobList: JobsInfo[] = []
  public idJob: number = 0;

  constructor(
      public breakpointObserver: BreakpointObserver,
      public MediaMatcher: MediaMatcher,
      private _jobsService: JobsService) {
    this.mediaQuery();
  }

  ngOnInit(): void {
    this.getJobs();
  }

  getJobs() {
    this._jobsService.getJobs().subscribe((data: any) => {
      this.inputJobList = data.body;
    })
  }


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
