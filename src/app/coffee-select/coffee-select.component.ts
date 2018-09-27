import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { CurrentUserService } from '../services/current-user-data.service';
import { CurrentDrinkDataService } from '../services/current-drink-data.service';
import { User } from '../models/user.model';
import { Drink } from '../models/drink.model';

@Component({
  selector: 'app-coffee-select',
  templateUrl: './coffee-select.component.html',
  styleUrls: ['./coffee-select.component.css']
})
export class CoffeeSelectComponent implements OnInit {
  @Input() user: User;
  @Input() drink: Drink;

  constructor(private currentUserService: CurrentUserService, private currentDrinkDataService: CurrentDrinkDataService) { }

  ngOnInit() {
    this.user = this.currentUserService.getUser();
  }

  onUpdateDrink() {
    // this.drink = html input
    // this.user.isVolunteer = html input
    this.currentDrinkDataService.setDrink(this.drink);
    this.currentUserService.addDrinkToUser(this.drink);
    this.currentUserService.setVolunteer(this.user.isVolunteer);
  }

}
