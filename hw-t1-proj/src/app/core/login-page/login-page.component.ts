import { Component } from '@angular/core';
import { AuthenticationService } from '../services/auth.service';
import { LoggerService } from '../services/logger.service';
import { Router } from '@angular/router';
import { error } from 'protractor';
import { User, UserToken } from '../models/user';
import { UserService } from '../services/user.service';

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
    private userService: UserService,
    private logger: LoggerService,
    private router: Router
  ) {}

  signIn() {
    this.logger.log('signInClick');
    this.authService.login(this.login, this.password).subscribe(
      (res: UserToken) => {
        this.logger.log('login success');
        //this.logger.log(JSON.stringify(res)); // { token: someToken }
        this.authService.authenticationToken = res.token;
        this.userService.getUserInfo(res.token).subscribe(
          (res: User) => {
            this.authService.authenticatedUser = res;
            this.router.navigate(['/courses']);
          },
          err => {
            this.logger.log('failed to get User Info');
            this.logger.log(err);
            alert('failed to get User Info');
          }
        );
      },
      err => {
        this.logger.log('login failed');
        this.logger.log(err);
        alert('login failed, pls try again');
      }
    );
  }
}
