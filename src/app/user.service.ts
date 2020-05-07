import { Injectable } from '@angular/core';

export type EditorType = 'loggedOut' | 'loggedIn'

@Injectable()
export class UserService{

  users = [
    {
      userName: 'john.doe',
      firstName: 'John',
      lastName: 'Doe',
      password: 'password1'
    },
    {
      userName: 'jane.doe',
      firstName: 'Jane',
      lastName: 'Doe',
      password: 'password2'
    }
  ];

  currentUser = {userName: '', firstName: '', lastName: '', password: ''}; 

  editor: EditorType = 'loggedOut';

  constructor() {}

  get loggedOut(){
    return this.editor === 'loggedOut';
  }

  get loggedIn(){
    return this.editor === 'loggedIn';
  }

  getCurrentUser(){
    return this.currentUser;
  }

  setCurrentUser(userNam, passwrd){
    for(var user of this.users){
      if(userNam == user.userName && passwrd == user.password){
        this.currentUser = user;
        this.toggleEditor('loggedIn');
      }
    }
  }

  emptyCurrentUser(){
    this.currentUser = {userName: '', firstName: '', lastName: '', password: ''};
    this.toggleEditor('loggedOut');
  }

  toggleEditor(type: EditorType){
    this.editor = type;
  }
}
