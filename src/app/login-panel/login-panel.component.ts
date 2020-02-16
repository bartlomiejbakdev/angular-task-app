import { Component, Output, EventEmitter } from '@angular/core';
import { getLocaleDayNames } from '@angular/common';
import { Users } from './interface-users';
import { ɵangular_packages_platform_browser_platform_browser_k } from '@angular/platform-browser';

@Component({
  selector: 'app-login-panel',
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.css']
})
export class LoginPanelComponent {

  constructor() { }



  clients: Array<Users> = [({ nick: 'bartek', pass: '123' })];

  @Output()
  eventVisable = new EventEmitter<string>();



  nickName: string;
  password: string;

  login() {
    console.log(this.nickName);
    console.log(this.password);

    this.clients.forEach(element => {
      if(element.nick === this.nickName){
        console.log('nick sie zagadza');
        if(element.pass === this.password){
          console.log('udało sie zalogować!');
          this.eventVisable.emit('tak');
        }
      }
    });

    this.nickName = '';
    this.password = '';

  }



}
