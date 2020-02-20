import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-login-panel',
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.css']
})
export class LoginPanelComponent {

  constructor(private toLoginService: LoginService) {

  }

  nickName: string;
  password: string;

  login() {
    this.toLoginService.veryfication(this.nickName, this.password);
  }

}
