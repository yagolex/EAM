import { User } from './user';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  getUserInfo() {
    const user = new User();
    user.firstName = 'Alex';
    user.lastName = 'Graboski';
    user.login = 'direfox';
    user.password = 'test';
    return user;
  }
}
