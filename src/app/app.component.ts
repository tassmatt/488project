import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Inventory Management Application';

  constructor(private userServices: UserService) {}

  get checkLoggedOut(){
    return this.userServices.editor === 'loggedOut';
  }

  get checkLoggedIn(){
    return this.userServices.editor === 'loggedIn';
  }
}
