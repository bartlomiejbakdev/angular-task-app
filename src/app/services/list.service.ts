import { Injectable } from '@angular/core';
import { ElList } from '../interfaces/el-list';
import { Observable, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ListService {

  private list: Array<ElList> = [];
  private sub = new BehaviorSubject<Array<ElList>>(this.list);

  constructor() {
    this.list = [{ name: 'mycie', createDate: new Date(), status: false }];
    this.sub.next(this.list);
  }

  addTaskService(taskName: string) {
    console.log(this.list);
    console.log(taskName);
    this.list.push({ name: taskName, createDate: new Date(), status: false });
    console.log(this.list);
    this.sub.next(this.list);
  }

  getList(): Observable<Array<ElList>> {
    return this.sub.asObservable();
  }
}
