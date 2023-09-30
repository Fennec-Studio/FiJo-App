import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsPageComponent } from './pages/jobs-page/jobs-page.component';
import { SharedModule } from '../shared/shared.module';
import { SubmenuComponent } from './components/submenu/submenu.component';

@NgModule({
  declarations: [
    JobsPageComponent,
    SubmenuComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    JobsPageComponent
  ]
})
export class JobsModule { }
