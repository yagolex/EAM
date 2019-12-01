import { Component, OnInit } from '@angular/core';
import { IUser } from '../model/i-user';
import { UserService } from '../model/user-service';
import { AuthenticationService } from '../model/auth-service.service';
import { LoggerService } from '../model/logger-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser: IUser;

  constructor(
    private authService: AuthenticationService,
    private userService: UserService,
    private logger: LoggerService
  ) {}

  ngOnInit() {
    if (this.authService.IsAthenticated(this.authService.GetUserInfo())) {
      this.currentUser = this.userService.getUserInfo();
    }
    // this.currentUser = this.userService.getUserInfo();
  }

  logOut() {
    this.logger.log('log out click!');
    this.authService.LogOut();
  }
}
