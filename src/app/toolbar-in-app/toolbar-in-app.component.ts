import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar-in-app',
  templateUrl: './toolbar-in-app.component.html',
  styleUrls: ['./toolbar-in-app.component.css']
})
export class ToolbarInAppComponent implements OnInit {

  constructor() { }

  @Output()
  eventVisable = new EventEmitter<string>();

  ngOnInit(): void {
  }

  logout() {
    console.log('logout');
    this.eventVisable.emit('logout');
  }
}
