import { Injectable } from '@angular/core';
import { Users } from '../interfaces/interface-users';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  private answer: boolean;
  private clients: Array<Users>;
  private beh = new BehaviorSubject<Array<Users>>([]);
  private sub = new Subject<boolean>();

  constructor() {
    this.clients = [{ nick: 'bartek', pass: '123' }];
    this.clients.push({ nick: 'paula', pass: '321' });
    this.beh.next(this.clients);
  }

  signIn() {
    this.answer = true;
    this.sub.next(this.answer);
  }

  getClients() {
    return this.beh.asObservable();
  }

  getAnswer() {
    return this.sub.asObservable();

  }

  createAccount(nickName: string, password: string) {
    this.clients.push({ nick: nickName, pass: password });
    this.beh.next(this.clients);
    this.answer = false;
    this.sub.next(this.answer);
  }

}
