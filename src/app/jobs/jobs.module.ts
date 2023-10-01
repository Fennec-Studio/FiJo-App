import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsPageManagementComponent } from './pages/jobs-page-management/jobs-page-management.component';
import { SharedModule } from '../shared/shared.module';
import { SubmenuComponent } from './components/submenu/submenu.component';
import { JoblistComponent } from './components/joblist/joblist.component';
import { ApplicantlistComponent } from './components/applicantlist/applicantlist.component';
import { JobsconfigComponent } from './components/jobsconfig/jobsconfig.component';
import { HttpClientModule } from '@angular/common/http';
import { JobCardComponent } from './components/job-card/job-card.component';

@NgModule({
  declarations: [
    JobsPageManagementComponent,
    SubmenuComponent,
    JoblistComponent,
    ApplicantlistComponent,
    JobsconfigComponent,
    JobCardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,

    SharedModule,
  ],
  exports: [
    JobsPageManagementComponent
  ]
})
export class JobsModule { }
