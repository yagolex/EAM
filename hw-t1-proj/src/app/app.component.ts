import { Component } from '@angular/core';
import { AuthenticationService } from './core/models/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hw-t1-proj';
  constructor(private authService: AuthenticationService) {}

  hasAthenticatedUser(): boolean {
    if (!this.authService.isAthenticated()) {
      this.authService.login('direfox', 'test');
    }
    return true;
  }
}
