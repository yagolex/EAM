import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { AuthenticationService } from '../services/auth.service';
import { Router } from '@angular/router';
import { LoggerService } from '../services/logger.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser: User;

  constructor(
    private authService: AuthenticationService,
    private userService: UserService,
    private router: Router,
    private logger: LoggerService
  ) {}

  ngOnInit() {
    // todo: does not work, need to re-run this somehow to let user name to appear in header
    if (this.authService.isAuthenticated()) {
      this.currentUser = this.userService.getUserInfo();
    }
  }

  logOut() {
    this.logger.log('Log Out');
    this.authService.logOut();
    this.router.navigate(['/login']);
  }
}
