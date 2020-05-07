import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  failedLoginText = '';

  constructor(private userServices: UserService) {}

  ngOnInit() {
  }

  onLoginButtonClick(uN, pW){
    for(var user of this.userServices.users){
      if(uN == user.userName && pW == user.password){
        this.userServices.setCurrentUser(uN, pW);
      }
      else{
        this.failedLoginText = 'Incorrect Credentials';
      }
    }
  }

}
