import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-toolbar-in-app',
  templateUrl: './toolbar-in-app.component.html',
  styleUrls: ['./toolbar-in-app.component.css']
})
export class ToolbarInAppComponent {

  constructor(private toLoginService: LoginService) { }

  logout() {
    this.toLoginService.sendLogout();
  }
}
