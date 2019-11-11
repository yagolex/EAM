import { User } from './user';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
    getUserInfo(){
        let user = new User();
        user.firstName = "Alex";
        user.lastName = "Graboski";
        return user;
    }
}
