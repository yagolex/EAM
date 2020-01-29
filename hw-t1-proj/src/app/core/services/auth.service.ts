import { Injectable } from '@angular/core';
import { User, UserApi, UserToken } from '../models/user';
import { Observable, BehaviorSubject, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, switchMap, tap, catchError } from 'rxjs/operators';
import { UserService } from './user.service';
import { Router } from '@angular/router';

const BASE_AUTH_URL = 'http://localhost:3004/auth/login';

@Injectable()
export class AuthenticationService {
  private authenticatedUser$: BehaviorSubject<User> = new BehaviorSubject(null) as BehaviorSubject<
    User
  >;
  public authenticationToken: string;

  public currentAuthenticatedUser$ = this.authenticatedUser$.asObservable();

  constructor(
    private httpClient: HttpClient,
    private userService: UserService,
    private router: Router
  ) {}

  private loginWithApi(url: string, user: UserApi): Observable<UserToken> {
    return this.httpClient.post<UserToken>(url, user);
  }

  public login(login: string, pwd: string) {
    const user: UserApi = { login, password: pwd };
    return this.loginWithApi(BASE_AUTH_URL, user).pipe(
      switchMap((token: UserToken) => {
        this.authenticationToken = token.token;
        return this.userService.getUserInfo(token.token).pipe(
          tap((userInfo: User) => {
            this.authenticatedUser$.next(userInfo); // notify all subscribers about data update
            this.router.navigate(['/courses']);
          }),
          catchError(err => {
            return throwError(err);
          })
        );
      })
    );
  }

  public logOut() {
    this.authenticationToken = null;
    this.authenticatedUser$.next(null);
  }

  public isAuthenticated(): Observable<boolean> {
    return this.currentAuthenticatedUser$.pipe(
      map((user: User) => {
        return (
          user !== null &&
          user !== undefined &&
          user.fakeToken !== null &&
          user.fakeToken === this.authenticationToken
        );
      })
    );
  }
}
