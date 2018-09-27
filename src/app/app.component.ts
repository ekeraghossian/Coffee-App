import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { User } from './models/user.model';
import { CurrentUserService } from './services/current-user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'coffee-app-gui';
  // currentUser: User;
  // users: User[];

  constructor(private currentUserService: CurrentUserService) {
  }

  ngOnInit() {
    // this.currentUser = this.currentUserService.getUser();
    // console.log(this.currentUser);
  }

}
