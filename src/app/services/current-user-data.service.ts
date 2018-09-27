import { User } from '../models/user.model';
import { Injectable } from '@angular/core';

@Injectable()
export class CurrentUserService {
    user: User = new User('');

    setUser(user: User) {
        this.user = user;
    }

    getUser() {
        return this.user;
    }
}
