import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-jobs-page',
  templateUrl: './jobs-page-management.component.html'
})
export class JobsPageManagementComponent {
  @Input() idx: number = 0;

  changeIndex(index:any) {
    this.idx = index;
  }
}
