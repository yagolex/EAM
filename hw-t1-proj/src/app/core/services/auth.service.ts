import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { UserService } from './user.service';

@Injectable()
export class AuthenticationService {
  private authenticatedUser: User;
  private authenticationToken: string;

  constructor(private userService: UserService) {}
  login(login: string, pwd: string): boolean {
    const user = this.userService.getUserInfo();
    if (login === user.login && pwd === 'test') {
      this.authenticatedUser = user;
      this.authenticationToken = 'authenticationToken';
      return true;
    }
    return false;
  }

  logOut() {
    this.authenticatedUser = null;
    this.authenticationToken = null;
  }

  isAuthenticated(): boolean {
    return (
      this.authenticatedUser !== null &&
      this.authenticatedUser !== undefined &&
      this.authenticatedUser.login !== null
    );
  }

  getUserInfo(): string {
    return this.authenticatedUser == null ? null : this.authenticatedUser.login;
  }
}
