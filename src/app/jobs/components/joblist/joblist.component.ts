import { Component } from '@angular/core';
import { JobsInfo } from 'src/app/shared/interfaces/JobsInfo';
import { JobsService } from '../../services/jobs.service';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './joblist.component.html'
})
export class JoblistComponent {
  constructor (
    private _jobsService: JobsService
  ) {}

  public jobs: JobsInfo[] = [];

  ngOnInit(): void {
    this.getJobs();
  }

  getJobs() {
    this._jobsService.getJobsByBusinessID(this._jobsService.getIDBusiness()).subscribe((data: any) => {
      this.jobs = data.body;
    })

    console.log(this.jobs);
  }
}
