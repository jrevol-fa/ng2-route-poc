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
    if (id) {
      return this.http.get('./assets/data.json')
        .map(res => res.json().accounts)
        .map(accs => accs ? accs.find(acc => acc.id === id) : undefined)
        .map(acc => acc as Account);
    }
    return Observable.of(undefined);
  }

}
