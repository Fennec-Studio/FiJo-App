import { JobsService } from './../../services/jobs.service';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { JobsInfo } from 'src/app/shared/interfaces/JobsInfo';

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
  public jobList: JobsInfo[] = [];

  @Input()
  sizeOfDisplay: string = 'mobile' || 'desktop';

  idJobSelected: number = 0;

  constructor( private JobsService: JobsService) {}

  ngOnInit(): void {
    this.sendDataCard,
    this.JobsService.idJob.next(this.idJobSelected);
  }

  @Output()
  outputJobData = new EventEmitter<number>();

  sendDataCard(id: number) {
    this.idJobSelected = id;
    this.JobsService.idJob.next(this.idJobSelected);
  }
}
