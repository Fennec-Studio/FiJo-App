import { Component, Input } from '@angular/core';
import { JobsInfo } from 'src/app/shared/interfaces/JobsInfo';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html'
})
export class JobCardComponent {
  @Input()
  jobData: JobsInfo = {} as JobsInfo;
}
