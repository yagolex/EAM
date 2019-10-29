import { User } from './user';

export class UserService {
    getUserInfo(){
        let user = new User();
        user.firstName = "Alex";
        user.lastName = "Graboski";
        return user;
    }
}
