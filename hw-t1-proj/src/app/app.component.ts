import { Component } from '@angular/core';
import { AuthenticationService } from './core/services/auth.service';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hw-t1-proj';
  constructor(private authService: AuthenticationService, private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      console.log(event);
    });
  }

  hasAuthenticatedUser(): boolean {
    if (!this.authService.isAuthenticated()) {
      this.authService.login('direfox', 'test');
    }
    return true;
  }
}
