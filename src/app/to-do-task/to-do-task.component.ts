import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/list.service';
import { ElList } from '../interfaces/el-list';

@Component({
  selector: 'app-to-do-task',
  templateUrl: './to-do-task.component.html',
  styleUrls: ['./to-do-task.component.css']
})
export class ToDoTaskComponent implements OnInit {

  listTasks: Array<ElList>;

  constructor(private sList: ListService) {
    this.sList.getList().subscribe((data: Array<ElList>) => {
      this.listTasks = data.filter(l => l.status !== true);
    });
  }

  ngOnInit(): void {
  }

  doTask(index) {
    this.sList.doTask(index);
  }
  removeTask(index) {
    this.sList.removeTask(index);
  }



}
