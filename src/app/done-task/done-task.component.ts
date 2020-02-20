import { Component } from '@angular/core';
import { ListService } from '../services/list.service';
import { ElList } from '../interfaces/el-list';

@Component({
  selector: 'app-done-task',
  templateUrl: './done-task.component.html',
  styleUrls: ['./done-task.component.css']
})
export class DoneTaskComponent {

  listTasks: Array<ElList>;



  constructor(private sList: ListService) {
    this.sList.getList().subscribe((data: Array<ElList>) => {
      this.listTasks = data.filter(l => l.status !== false);
    });
  }

}
