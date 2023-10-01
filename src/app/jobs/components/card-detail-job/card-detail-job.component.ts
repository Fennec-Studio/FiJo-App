import { Component, Input, OnInit } from '@angular/core';
import { dataJob } from '../../interface/jobs.interface';
import { JobsService } from '../../services/jobs.service';

@Component({
  selector: 'card-detail-job',
  templateUrl: './card-detail-job.component.html',
  styleUrls: ['./card-detail-job.component.css']
})
export class CardDetailJobComponent implements OnInit{

  @Input()
  public jobList: dataJob[] = [];

  @Input()
  public jobSelected: number;

  constructor( private JobsService: JobsService) {
    this.jobSelected = 0;
    this.jobList = this.JobsService.inputJobList;
  }

  ngOnInit(): void {
    this.JobsService.idJob.subscribe((id) => {
      this.jobSelected = id;
      console.log(this.jobSelected);
    });
  }



  // @Input()
  // public jobImg: String = "";

  // @Input()
  // public jobTitle: String = "";

  // @Input()
  // public jobPayment: number = 0;

  // @Input()
  // public jobFrecuencyPayment: String = "";

  // @Input()
  // public jobLocation: String = "";

  // @Input()
  // public jobEnterprise: String = "";

  // @Input()
  // public jobContractType: String = "";

  // @Input()
  // public jobTime: String = "";

  // @Input()
  // public jobType: String = "";

  // @Input()
  // public jobDescription: String = "";

  // @Input()
  // public jobEnterpriseRate: number = 0;
}
