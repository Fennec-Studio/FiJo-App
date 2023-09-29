import { Component } from '@angular/core';
import { fromEvent } from 'rxjs/internal/observable/fromEvent';

@Component({
  selector: 'shared-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent {
  public sesionActive: boolean = false;
  public gender: number = 1;
  public name: string = 'Felipe';
  public lastName: string = 'Ramirez';

  public scroll: boolean = false;
  constructor() {
    fromEvent(document, 'scroll').subscribe(
      event => this.scroll = (document.documentElement.scrollTop === 0) ? false : true
    );
  }

  // isSesionExpired
}
