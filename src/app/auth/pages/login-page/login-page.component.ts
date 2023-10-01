import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  constructor(
    private _authService: AuthService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    if(this._authService.isSessionExpired()) {
      this._router.navigate(['/login'])
      this._authService.logout()
    } else {
      this._router.navigate(['/'])
    }
  }
}
