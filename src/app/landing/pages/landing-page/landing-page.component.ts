import { Component } from '@angular/core';
import { fromEvent } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

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
  constructor(
    private _authService: AuthService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    if(this._authService.isSessionExpired()) {
      this._router.navigate(['/login'])
      this._authService.logout()
    } else {
      this._router.navigate(['/account/profile'])
    }
  }
}
