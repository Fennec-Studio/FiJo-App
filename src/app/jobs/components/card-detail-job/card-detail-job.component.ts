import { Component, Input, OnInit } from '@angular/core';
import { JobsService } from '../../services/jobs.service';
import { JobsInfo } from 'src/app/shared/interfaces/JobsInfo';

@Component({
  selector: 'card-detail-job',
  templateUrl: './card-detail-job.component.html',
  styleUrls: ['./card-detail-job.component.css']
})
export class CardDetailJobComponent{



  constructor( private JobsService: JobsService) {

  }


}
