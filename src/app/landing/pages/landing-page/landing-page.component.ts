import { Component } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
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
}
