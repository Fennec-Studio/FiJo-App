import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsPageManagementComponent } from './pages/jobs-page-management/jobs-page-management.component';
import { SharedModule } from '../shared/shared.module';
import { SubmenuComponent } from './components/submenu/submenu.component';

@NgModule({
  declarations: [
    JobsPageManagementComponent,
    SubmenuComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    JobsPageManagementComponent
  ]
})
export class JobsModule { }
