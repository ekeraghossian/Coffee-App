import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { CurrentUserService } from '../services/current-user-data.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-coffee-select',
  templateUrl: './coffee-select.component.html',
  styleUrls: ['./coffee-select.component.css']
})
export class CoffeeSelectComponent implements OnInit {
  @Input() user: User;

  constructor(private currentUserService: CurrentUserService) { }

  ngOnInit() {
    this.user = this.currentUserService.getUser();
  }
}
