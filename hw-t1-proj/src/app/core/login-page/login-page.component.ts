import { Component, OnDestroy } from '@angular/core';
import { AuthenticationService } from '../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnDestroy {
  login: string = '';
  password: string = '';
  private sub: Subscription;

  constructor(private authService: AuthenticationService) {}

  signIn() {
    this.sub = this.authService.login(this.login, this.password).subscribe();
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
