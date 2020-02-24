import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';
import { ListService } from './services/list.service';
import { SignInService } from './services/sign-in.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoginService, ListService, SignInService]
})
export class AppComponent implements OnInit {
  title = 'task-app';

  isVisibleLogin = true;
  isVisibleApp: boolean;
  isVisibleSignIn: boolean;

  constructor(private toLoginService: LoginService, private toSignInService: SignInService) {

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
    this.toSignInService.getAnswer().subscribe(data => {
      this.isVisibleSignIn = data;
      if (data === true) {
        this.isVisibleLogin = false;
      } else {
        this.isVisibleLogin = true;
      }
    });
  }
}
