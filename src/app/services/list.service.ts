import {Injectable, OnInit} from '@angular/core';
import {Task} from '../interfaces/interface-task';
import {Observable, BehaviorSubject} from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class ListService {


    private list: Array<Task> = [];
    private sub = new BehaviorSubject<Array<Task>>([]);
    private count = 0;
    currentUser = 'nvm';

    constructor() {
        this.list = [{id: this.count, name: 'mycie', createDate: new Date(), status: false}];
        this.count = this.count + 1;
        this.sub.next(this.list);
    }

    addTaskService(taskName: string) {
        this.list.push({id: this.count, name: taskName, createDate: new Date(), status: false, creator: this.currentUser});
        this.count = this.count + 1;
        this.sub.next(this.list);
    }

    getUser(user: string) {
        this.currentUser = user;
    }

    getList(): Observable<Array<Task>> {
        return this.sub.asObservable();
    }

    doTask(index: number) {

        const toAdd = this.list.find(e => {
            return e.id === index;
        });
        toAdd.status = true;
        toAdd.endDate = new Date();
        this.sub.next(this.list);
    }

    removeTask(index: number) {
        this.list = this.list.filter(e => {
            return e.id !== index;
        });
        this.sub.next(this.list);
    }
}
