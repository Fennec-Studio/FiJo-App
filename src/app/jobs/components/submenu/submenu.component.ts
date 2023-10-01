import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-jobs-submenu',
  templateUrl: './submenu.component.html'
})
export class SubmenuComponent {
  idxSubmenu: number = 0;
  @Output()
  public idx: EventEmitter<number> = new EventEmitter<number>();

  changeIndex(index: number) {
    this.idxSubmenu = index;
    this.idx.emit(this.idxSubmenu);
  }
}
