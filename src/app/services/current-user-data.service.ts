import { User } from '../models/user.model';
import { Drink } from '../models/drink.model';
import { Injectable } from '@angular/core';

@Injectable()
export class CurrentUserService {
    user: User = new User('');
    drink: Drink;

    setUser(user: User) {
        this.user = user;
    }

    getUser() {
        return this.user;
    }

    setVolunteer(trueOrFalse: boolean) {
        this.user.isVolunteer = trueOrFalse;
      }

    addDrinkToUser(drink: Drink) {
    this.user.drink = drink;
    }
}
