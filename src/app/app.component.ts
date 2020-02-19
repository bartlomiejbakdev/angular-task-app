import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';
import {ListService} from './services/list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoginService, ListService]
})
export class AppComponent implements OnInit {
  title = 'task-app';

  isVisibleLogin = true;
  isVisibleApp: boolean;

  constructor(private toLoginService: LoginService) {

  }
  ngOnInit(): void {
    this.toLoginService.getAnswer().subscribe(data => {
      this.isVisibleApp = data;
      if (data === true) {
        this.isVisibleLogin = false;
      } else {
        this.isVisibleLogin = true;
      }
    });
  }

}
