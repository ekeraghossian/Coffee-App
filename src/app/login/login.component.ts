import { Component, OnInit, Input } from '@angular/core';
import { User } from '../models/user.model';
import { CurrentUserService } from '../services/current-user-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;

  constructor(private currentUserService: CurrentUserService) { }

  ngOnInit() {
    this.user = this.currentUserService.getUser();
  }

  onUpdateUserName(event: Event) {
    this.user.name = (<HTMLInputElement>event.target).value;
    this.currentUserService.setUser(this.user);
  }
}
