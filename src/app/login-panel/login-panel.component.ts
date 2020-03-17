import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { SignInService } from '../services/sign-in.service';
import { ListService } from '../services/list.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-login-panel',
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.css']
})
export class LoginPanelComponent {

  constructor(private toLoginService: LoginService, private toSignIn: SignInService, private toListIn: ListService, private location: Location) {
  }

  nickName: string;
  password: string;

  login() {
    this.toLoginService.veryfication(this.nickName, this.password);
    this.sendUser();
  }

  sendUser() {
    this.toListIn.getUser(this.nickName);
  }

  signIn() {
    this.toSignIn.signIn();
  }
}
