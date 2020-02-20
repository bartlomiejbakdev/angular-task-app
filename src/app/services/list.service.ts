import { Injectable } from '@angular/core';
import { ElList } from '../interfaces/el-list';
import { Observable, BehaviorSubject } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class ListService {

  private list: Array<ElList> = [];
  private sub = new BehaviorSubject<Array<ElList>>([]);
  private count = 0;

  constructor() {
    this.list = [{ id: this.count, name: 'mycie', createDate: new Date(), status: false }];
    this.count = this.count + 1;
    this.sub.next(this.list);
  }

  addTaskService(taskName: string) {
    console.log(this.list);
    console.log(taskName);
    this.list.push({ id: this.count, name: taskName, createDate: new Date(), status: false });
    this.count = this.count + 1;
    console.log(this.list);
    this.sub.next(this.list);
  }

  getList(): Observable<Array<ElList>> {
    return this.sub.asObservable();
  }

  doTask(index) {

    const toAdd = this.list.find(e => {
      return e.id === index;
    });
    toAdd.status = true;
    toAdd.endDate = new Date();
    this.sub.next(this.list);
  }
  removeTask(index) {
    this.list = this.list.filter(e => {
      return e.id !== index;
    });
    this.sub.next(this.list);
  }
}
