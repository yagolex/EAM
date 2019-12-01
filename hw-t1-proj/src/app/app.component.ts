import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './core/model/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hw-t1-proj';
  constructor(private authService: AuthenticationService) {}

  HasAthenticatedUser(): boolean {
    return this.authService.IsAthenticated(this.authService.GetUserInfo());
  }
  ngOnInit(): void {}
}
