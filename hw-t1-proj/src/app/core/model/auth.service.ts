import { Injectable } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';

@Injectable()
export class AuthenticationService {
  private autenticatedUser: User;
  private autenticationToken: string;

  constructor(private userService: UserService) {}
  login(login: string, pwd: string): boolean {
    const user = this.userService.getUserInfo();
    if (login === user.login && pwd === 'test') {
      this.autenticatedUser = user;
      this.autenticationToken = 'autenticationToken';
      return true;
    }
    return false;
  }

  logOut() {
    this.autenticatedUser = null;
    this.autenticationToken = null;
  }

  isAthenticated(): boolean {
    return (
      this.autenticatedUser !== null &&
      this.autenticatedUser !== undefined &&
      this.autenticatedUser.login !== null
    );
  }

  getUserInfo(): string {
    return this.autenticatedUser == null ? null : this.autenticatedUser.login;
  }
}
