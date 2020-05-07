import { Injectable } from '@angular/core';

@Injectable()
export class TaskService {

  tasks = [
    {
      id: 1,
      task: 'Clean office'
    },
    {
      id: 2,
      task: 'Do paperwork'
    },
    {
      id: 3,
      task: 'Get pens'
    }
  ];

  constructor() { }

  addTask(newTask: {id: number, task: string}){
    this.tasks.push(newTask);
  }

  deleteTask(i: number){
    this.tasks.splice(i, 1);
  }
}
