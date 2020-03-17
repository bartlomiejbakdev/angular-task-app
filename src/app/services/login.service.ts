import { Injectable } from '@angular/core';
import { Users } from '../interfaces/interface-users';
import { Subject, Observable } from 'rxjs';
import { SignInService } from './sign-in.service';
import { Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private answer: boolean;
  private sub = new Subject<boolean>();
  private listClients: Array<Users>;

  constructor(private signin: SignInService, private router: Router) {
    this.listClients = [{ nick: 'bartek', pass: '123' }, { nick: 'paula', pass: '321' }, { nick: 'gapa', pass: '111' }];
  }

  veryfication(nickname: string, password: string) {
    for (const usr of this.listClients) {
      if (usr.nick === nickname) {
        if (usr.pass === password) {
          this.answer = true;
          this.sub.next(this.answer);
          this.router.navigate(['/app']);
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
