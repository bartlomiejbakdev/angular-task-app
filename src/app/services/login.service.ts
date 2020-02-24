import { Injectable } from '@angular/core';
import { Users } from '../interfaces/interface-users';
import { Subject, Observable } from 'rxjs';
import { SignInService } from './sign-in.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private answer: boolean;
  private sub = new Subject<boolean>();
  private listClients: Array<Users>;

  constructor(private signin: SignInService) {
    this.listClients = [{ nick: 'bartek', pass: '123' }, { nick: 'paula', pass: '321' }];
  }

  veryfication(nickname: string, password: string) {
    for (const usr of this.listClients) {
      if (usr.nick === nickname) {
        if (usr.pass === password) {
          this.answer = true;
          this.sub.next(this.answer);
          break;
        }
      } else {
        this.answer = false;
        this.sub.next(this.answer);
      }
    }
  }

  sendLogout() {
    this.sub.next(false);
  }

  getAnswer(): Observable<boolean> {
    return this.sub.asObservable();
  }

  getNewClientsData(nickname: string, password: string) {
    this.listClients.push({ nick: nickname, pass: password });
    console.log('nastapil push' + this.listClients);
  }
}
