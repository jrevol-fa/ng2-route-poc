import {Injectable} from '@angular/core';
import {Account} from './account';
import {Observable} from 'rxjs';
import {Http} from '@angular/http';

@Injectable()
export class AccountRepository {

  constructor(private http: Http) {
  }

  findAll(): Observable<Account[]> {
    return this.http.get('./assets/data.json')
      .map(res => res.json().accounts)
      .map(accs => accs as Account[]);
  }

  findOne(id: number): Observable<Account> {
    return this.http.get('./assets/data.json')
      .map(res => res.json().accounts)
      .filter(accs => accs)
      .map(accs => accs.find(acc => acc.id === id))
      .map(acc => acc as Account);
  }

}
