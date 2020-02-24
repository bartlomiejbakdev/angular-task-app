import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/list.service';
import { Task } from '../interfaces/interface-task';

@Component({
  selector: 'app-to-do-task',
  templateUrl: './to-do-task.component.html',
  styleUrls: ['./to-do-task.component.css']
})
export class ToDoTaskComponent implements OnInit {

  listTasks: Array<Task>;

  constructor(private sList: ListService) {
  }

  ngOnInit(): void {
    this.sList.getList().subscribe((data: Array<Task>) => {
      this.listTasks = data.filter(l => l.status !== true);
      this.listTasks = this.listTasks.filter(l => l.creator === this.sList.currentUser);
    });
  }

  doTask(index: number) {
    this.sList.doTask(index);
  }

  removeTask(index: number) {
    this.sList.removeTask(index);
  }



}
