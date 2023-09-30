import { Component } from '@angular/core';

@Component({
  selector: 'app-jobs-submenu',
  templateUrl: './submenu.component.html'
})
export class SubmenuComponent {
  public index = 0;

  changeIndex(index: number) {
    this.index = index;
  }
}
