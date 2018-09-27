import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { CoffeeSelectComponent } from './coffee-select/coffee-select.component';
import { CurrentUserService } from './services/current-user-data.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    LoginComponent,
    CoffeeSelectComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CurrentUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
