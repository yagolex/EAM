import { Injectable } from '@angular/core';
import { User, UserApi, UserToken } from '../models/user';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const BASE_AUTH_URL = 'http://localhost:3004/auth/login';

@Injectable()
export class AuthenticationService {
  public authenticatedUser$: BehaviorSubject<User> = <BehaviorSubject<User>>(
    new BehaviorSubject(null)
  );
  public authenticationToken: string;

  subscribeOnAuthUserUpdates(): Observable<User> {
    return this.authenticatedUser$.asObservable();
  }

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
    this.authenticationToken = null;
    this.authenticatedUser$.next(null);
  }

  isAuthenticated(): boolean {
    return (
      this.authenticationToken !== null && this.authenticationToken !== undefined
      // &&
      // this.authenticatedUser$.getValue() !== null &&
      // this.authenticatedUser$.getValue() !== undefined &&
      // this.authenticatedUser$.getValue().fakeToken !== null &&
      // this.authenticatedUser$.getValue().fakeToken !== this.authenticationToken
    );
  }
}
