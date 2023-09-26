import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { DateFixPipe } from './pipes/date-fix.pipe';

@NgModule({
  declarations: [
    NavBarComponent,
    DateFixPipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    NavBarComponent,
    DateFixPipe,
  ],
})
export class SharedModule { }
