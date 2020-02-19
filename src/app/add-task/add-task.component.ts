import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/list.service';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  taskString: string;

  constructor(private sList: ListService) { }

  ngOnInit(): void {
  }

  addTask() {
    this.sList.addTaskService(this.taskString);
    this.taskString = '';
  }

}
