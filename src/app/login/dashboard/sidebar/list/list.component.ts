import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TaskService } from 'app/task.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Output() taskDeleted = new EventEmitter<{id: number, task: string}>();

  constructor(private taskServices: TaskService) { }

  tasks: {id: number, task: string}[] = [];
  inputValue = '';

  onAddTask(inputTask){
    if(inputTask != ''){
      this.taskServices.addTask({id: this.tasks.length + 1, task: inputTask});
    }
  }

  onDeleteTask(i: number){
    this.taskServices.deleteTask(i);
  }

  ngOnInit() {
    this.tasks = this.taskServices.tasks;
  }
}
