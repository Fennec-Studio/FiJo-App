import { Component, Input, OnInit } from '@angular/core';
import { JobsService } from '../../services/jobs.service';
import { JobsInfo } from 'src/app/shared/interfaces/JobsInfo';

@Component({
  selector: 'card-detail-job',
  templateUrl: './card-detail-job.component.html',
  styleUrls: ['./card-detail-job.component.css']
})
export class CardDetailJobComponent implements OnInit{

  @Input()
  public jobList: JobsInfo[] = [];

  @Input()
  public jobSelected: number;

  constructor( private JobsService: JobsService) {
    this.jobSelected = 0;
  }

  ngOnInit(): void {
    this.JobsService.idJob.subscribe((id) => {
      this.jobSelected = id;
      console.log(this.jobSelected);
    });
  }
}
