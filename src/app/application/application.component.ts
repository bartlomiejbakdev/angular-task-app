import {Component, OnInit} from '@angular/core';
import {LoginService} from '../services/login.service';
import {ListService} from '../services/list.service';

@Component({
    selector: 'app-application',
    templateUrl: './application.component.html',
    styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {

    user = 'idk';

    constructor(private toLoginService: LoginService, private toListService: ListService) {
    }

    logout() {
        console.log(this.toListService.currentUser);
        this.toLoginService.sendLogout();
    }

    ngOnInit(): void {
        this.user = this.toListService.currentUser;
    }

}
