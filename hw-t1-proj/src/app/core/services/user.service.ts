import { Injectable } from '@angular/core';
import { User, UserApi, UserToken } from '../models/user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { LoggerService } from './logger.service';

const USER_INFO_URL = 'http://localhost:3004/auth/userinfo';

@Injectable()
export class UserService {
  constructor(private httpClient: HttpClient, private logger: LoggerService) {}

  private getUserFromApiByToken(url: string, token: UserToken): Observable<UserApi> {
    return this.httpClient.post<UserApi>(url, token);
  }

  getUserInfo(token: string): Observable<User> {
    const url = `${USER_INFO_URL}`;
    const user: UserToken = { token };
    return this.getUserFromApiByToken(url, user).pipe(
      map((item: UserApi) => {
        this.logger.log(JSON.stringify(item));
        return this.mapApi2AppItem(item);
      })
    );
  }

  private mapApi2AppItem(item: UserApi): User {
    return {
      id: item.id,
      firstName: item.name != null ? item.name.first : '',
      lastName: item.name != null ? item.name.last : '',
      login: item.login,
      password: item.password,
      fakeToken: item.fakeToken
    };
  }
}
