import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { AuthenticationService } from '../services/auth.service';
import { Router } from '@angular/router';
import { LoggerService } from '../services/logger.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser: Observable<User>;

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private logger: LoggerService
  ) {}

  ngOnInit() {
    this.logger.log('HeaderComponent - currentUser - ngOnInit');
    this.currentUser = this.authService.currentAuthenticatedUser$;
  }

  logOut() {
    this.logger.log('Log Out');
    this.authService.logOut();
    this.router.navigate(['/login']);
  }
}
