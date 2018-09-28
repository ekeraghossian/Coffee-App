import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { CurrentUserService } from '../services/current-user-data.service';
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
  isVolunteer: boolean;

  constructor(private currentUserService: CurrentUserService) { }

  ngOnInit() {
    this.user = this.currentUserService.getUser();
  }

  setDrinkType(type: string) {
    this.drink.name = type;
  }

  onUpdateDrink() {
    // this.drink = html input
    // this.isVolunteer = html input
    this.currentUserService.user.setDrink(this.drink);
    this.currentUserService.user.setVolunteer(this.isVolunteer);
  }

}
