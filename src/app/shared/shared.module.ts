import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { DateFixPipe } from './pipes/date-fix.pipe';

@NgModule({
  declarations: [
    NavigationBarComponent,
    DateFixPipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    NavigationBarComponent
    DateFixPipe,
  ],
})
export class SharedModule { }
