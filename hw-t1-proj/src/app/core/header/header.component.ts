import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { AuthenticationService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser: User;

  constructor(private authService: AuthenticationService, private userService: UserService) {}

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      this.currentUser = this.userService.getUserInfo();
    }
  }

  logOut() {
    this.authService.logOut();
  }
}
