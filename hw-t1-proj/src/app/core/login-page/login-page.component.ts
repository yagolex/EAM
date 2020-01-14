import { Component } from '@angular/core';
import { AuthenticationService } from '../services/auth.service';
import { LoggerService } from '../services/logger.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  login: string = '';
  password: string = '';

  constructor(
    private authService: AuthenticationService,
    private logger: LoggerService,
    private router: Router
  ) {}

  signIn() {
    this.logger.log('signInClick');
    if (this.authService.login(this.login, this.password)) {
      this.logger.log('login success');
      this.router.navigate(['/courses']);
    } else {
      this.logger.log('login failure');
    }
  }
}
