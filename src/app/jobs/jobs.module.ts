import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { JobsPageComponent } from './pages/jobs-page/jobs-page.component';
import { CardDetailJobComponent } from './components/card-detail-job/card-detail-job.component';
import { FilterDropdownComponent } from './components/filter-dropdown/filter-dropdown.component';
import { JobExpansionComponent } from './components/job-expansion/job-expansion.component';

@NgModule({
  declarations:[
    JobsPageComponent,
    CardDetailJobComponent,
  ],
  imports:[
    CommonModule,
    RouterModule,
    SharedModule,
    JobExpansionComponent,
    FilterDropdownComponent,
  ],
  exports:[
    JobsPageComponent,
  ]
})
export class JobsModule{ }
