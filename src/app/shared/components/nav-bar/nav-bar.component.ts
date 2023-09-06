import { Component } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'shared-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  public scroll: boolean = false;

  constructor() {
    fromEvent(document, 'scroll').subscribe(
      event => this.scroll = (document.documentElement.scrollTop === 0) ? false : true
    );
  }
}
