import { Component } from '@angular/core';
import { ListService } from '../services/list.service';
import { Task } from '../interfaces/interface-task';

@Component({
  selector: 'app-done-task',
  templateUrl: './done-task.component.html',
  styleUrls: ['./done-task.component.css']
})
export class DoneTaskComponent {

  listTasks: Array<Task>;

  constructor(private sList: ListService) {
    this.sList.getList().subscribe((data: Array<Task>) => {
      this.listTasks = data.filter(l => l.status !== false);
      this.listTasks = this.listTasks.filter(l => l.creator === this.sList.currentUser);
    });
  }

}
