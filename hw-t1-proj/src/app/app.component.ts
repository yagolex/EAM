import { Component } from '@angular/core';
import { AuthenticationService } from './core/model/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hw-t1-proj';
  constructor(private authService: AuthenticationService) {}

  hasAthenticatedUser(): boolean {
    return this.authService.isAthenticated();
  }
}
