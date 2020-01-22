import { Injectable } from '@angular/core';
import { User, UserApi, UserToken } from '../models/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const BASE_AUTH_URL = 'http://localhost:3004/auth/login';

@Injectable()
export class AuthenticationService {
  public authenticatedUser: Observable<User> = new Observable<User>();
  public authenticationToken: string;

  constructor(private httpClient: HttpClient) {}
  private loginWithApi(url: string, user: UserApi): Observable<UserToken> {
    return this.httpClient.post<UserToken>(url, user);
  }

  login(login: string, pwd: string): Observable<UserToken> {
    let url = BASE_AUTH_URL;
    let user: UserApi = { login: login, password: pwd };
    return this.loginWithApi(url, user);
  }

  logOut() {
    this.authenticatedUser = null;
    this.authenticationToken = null;
  }

  isAuthenticated(): boolean {
    return (
      this.authenticatedUser !== null &&
      this.authenticatedUser !== undefined &&
      this.authenticationToken !== null &&
      this.authenticationToken !== undefined
    );
  }
}
