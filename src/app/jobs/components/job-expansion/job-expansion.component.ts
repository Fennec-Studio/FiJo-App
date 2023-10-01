import { JobsService } from './../../services/jobs.service';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { dataJob } from '../../interface/jobs.interface';

@Component({
  selector: 'job-expansion',
  templateUrl: './job-expansion.component.html',
  styleUrls: ['./job-expansion.component.css'],
  standalone: true,
  imports: [MatExpansionModule, CommonModule],
})
export class JobExpansionComponent implements OnInit {
  panelOpenState = false;

  @Input()
  public jobList: dataJob[] = [];

  @Input()
  sizeOfDisplay: string = 'mobile' || 'desktop';

  // @Input()
  // public idJobSelected: number;

  idJobSelected: number = 0;

  constructor( private JobsService: JobsService) {}

  ngOnInit(): void {
    this.sendDataCard,
    this.JobsService.idJob.next(this.idJobSelected);
  }

  @Output()
  outputJobData = new EventEmitter<number>();
  // public outputJobData: dataJob = {
  //   jobID: 0,
  //   jobImg: '',
  //   jobTitle: '',
  //   jobPayment: 0,
  //   jobFrecuencyPayment: '',
  //   jobLocation: '',
  //   jobEnterprise: '',
  //   jobContractType: '',
  //   jobTime: '',
  //   jobType: '',
  //   jobDescription: '',
  //   jobEnterpriseRate: 0,
  // };

  sendDataCard(id: number) {
    this.idJobSelected = id;
    this.JobsService.idJob.next(this.idJobSelected);
    console.log(this.jobList[id].jobID);
  }
}
