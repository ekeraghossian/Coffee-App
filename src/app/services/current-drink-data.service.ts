import { Injectable } from '@angular/core';
import { Drink } from '../models/drink.model';

@Injectable({
  providedIn: 'root'
})
export class CurrentDrinkDataService {
  drink: Drink;

  constructor() { }

  setDrink (drink: Drink) {
    this.drink = drink;
    if (drink.sugar > 10) {
      this.drink.sugar = 10;
    } else if (drink.sugar < 0) {
      this.drink.sugar = 0;
    } else if (drink.name === 'water') {
      this.drink.milk = 0;
      this.drink.sugar = 0;
    }
  }

  getDrink () {
    return this.drink;
  }

}


