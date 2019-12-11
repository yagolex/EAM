import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable()
export class UserService {
  getUserInfo(): User {
    return {
      firstName: 'Alex',
      lastName: 'Graboski',
      login: 'direfox',
      password: 'test'
    };
  }
}
