import { Injectable } from '@angular/core';
import { IUser } from './i-user';
import { UserService } from './user-service';

@Injectable()
export class AuthenticationService {
  private autenticatedUser: IUser;
  private autenticationToken: string;

  constructor(private userService: UserService) {}
  Login(login: string, pwd: string): boolean {
    const user = this.userService.getUserInfo();
    if (login === user.login && pwd === 'test') {
      this.autenticatedUser = user;
      this.autenticationToken = 'autenticationToken';
      return true;
    }
    return false;
  }
  LogOut() {
    this.autenticatedUser = null;
    this.autenticationToken = null;
  }
  IsAthenticated(login: string): boolean {
    return login != null && this.autenticatedUser !== null && this.autenticatedUser.login === login;
  }
  GetUserInfo(): string {
    return this.autenticatedUser == null ? null : this.autenticatedUser.login;
  }
}
