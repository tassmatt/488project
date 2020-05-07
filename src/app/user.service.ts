import { Injectable } from '@angular/core';

@Injectable()
export class UserService{
    users = [
        {
            userName: 'john.doe',
            firstName: 'John',
            lastName: 'Doe',
            password: 'password1'
        }
    ];

  constructor() {}

}
