import { Component } from '@angular/core';
import { AuthenticationService } from '../models/auth.service';
import { LoggerService } from '../../shared/models/logger.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  login: string = '';
  password: string = '';

  constructor(private authService: AuthenticationService, private logger: LoggerService) {}

  signIn() {
    this.logger.log('signInClick');
    if (this.authService.login(this.login, this.password)) {
      this.logger.log('login sucess');
    } else {
      this.logger.log('login failure');
    }
  }
}
