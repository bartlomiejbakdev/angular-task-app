import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task-app';

  isVisibleLogin = true;
  isVisibleApp = false;

  switch(to) {
    console.log(to);
    if (this.isVisibleLogin === false) {
      this.isVisibleLogin = true;
      this.isVisibleApp = false;
    } else if (this.isVisibleLogin === true) {
      this.isVisibleLogin = false;
      this.isVisibleApp = true;

    }

  }

}
