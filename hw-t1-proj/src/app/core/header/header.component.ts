import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
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
    private router: Router,
    private logger: LoggerService
  ) {}

  ngOnInit() {
    // todo: does not work, need to fix it  somehow to let user name appear in header
    this.currentUser = this.authService.authenticatedUser;
    // todo: remove below after testing (it works)
    //this.currentUser = { firstName: 'Alex', lastName: 'Graboski', login: 'aa', password: '' };
  }

  logOut() {
    this.logger.log('Log Out');
    this.authService.logOut();
    this.router.navigate(['/login']);
  }
}
