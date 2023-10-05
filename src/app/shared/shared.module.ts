import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { DateFixPipe } from './pipes/date-fix.pipe';
import { MatMenu, MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    NavigationBarComponent,
    DateFixPipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatMenuModule,
  ],
  exports: [
    NavigationBarComponent,
    DateFixPipe,
  ],
})
export class SharedModule { }
