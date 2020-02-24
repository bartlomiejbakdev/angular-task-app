import { Component, OnInit } from '@angular/core';
import { SignInService } from '../services/sign-in.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-sign-in-panel',
  templateUrl: './sign-in-panel.component.html',
  styleUrls: ['./sign-in-panel.component.css']
})
export class SignInPanelComponent implements OnInit {

  nickName: string;
  password: string;

  constructor(private signInService: SignInService, private loginInService: LoginService) { }

  ngOnInit(): void {
  }

  createAccount() {
    this.signInService.createAccount(this.nickName, this.password);
    this.sendNewClients();
  }

  sendNewClients() {
    this.loginInService.getNewClientsData(this.nickName, this.password);
  }
}
