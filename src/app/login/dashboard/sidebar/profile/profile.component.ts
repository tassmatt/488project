import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private userServices: UserService) { }

  ngOnInit() {
  }

  onLogoutClick(){
    this.userServices.emptyCurrentUser();
  }

}
