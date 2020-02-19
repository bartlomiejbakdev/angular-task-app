import { Injectable } from '@angular/core';
import { Users } from '../interfaces/interface-users';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor() { }

  private answer: boolean;
  private sub = new Subject<boolean>();
  private clients: Array<Users> = [({ nick: 'bartek', pass: '123' })];

  veryfication(nickname: string, password: string) {
    return this.clients.forEach(element => {
      if (element.nick === nickname) {

        if (element.pass === password) {
          this.answer = true;
          this.sub.next(this.answer);
        }
      } else {
        this.answer = false;
        this.sub.next(this.answer);
      }
    });

  }
  sendLogout() {
    this.sub.next(false);
  }

  getAnswer(): Observable<boolean> {
    return this.sub.asObservable();
  }

}
