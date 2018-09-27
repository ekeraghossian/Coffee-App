import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = [
    new User('Fokke'),
    new User('Jordy'),
    new User('Eskandar')
  ];

  constructor() { }

  ngOnInit() {
  }

}
