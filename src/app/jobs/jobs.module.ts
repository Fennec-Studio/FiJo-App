
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '../shared/shared.module';

import { JobsPageManagementComponent } from './pages/jobs-page-management/jobs-page-management.component';
import { SubmenuComponent } from './components/submenu/submenu.component';
import { JoblistComponent } from './components/joblist/joblist.component';
import { ApplicantlistComponent } from './components/applicantlist/applicantlist.component';
import { JobsconfigComponent } from './components/jobsconfig/jobsconfig.component';
import { JobCardComponent } from './components/job-card/job-card.component';
import { JobsPageComponent } from './pages/jobs-page/jobs-page.component';
import { CardDetailJobComponent } from './components/card-detail-job/card-detail-job.component';
import { FilterDropdownComponent } from './components/filter-dropdown/filter-dropdown.component';
import { JobExpansionComponent } from './components/job-expansion/job-expansion.component';

@NgModule({
  declarations:[
    JobsPageComponent,
    CardDetailJobComponent,
    JobsPageManagementComponent,
    SubmenuComponent,
    JoblistComponent,
    ApplicantlistComponent,
    JobsconfigComponent,
    JobCardComponent
  ],
  imports:[
    CommonModule,
    RouterModule,
    SharedModule,
    HttpClientModule,

    JobExpansionComponent,
    FilterDropdownComponent,
  ],
  exports:[
    JobsPageComponent,
    JobsPageManagementComponent,
  ]
})
export class JobsModule{ }
