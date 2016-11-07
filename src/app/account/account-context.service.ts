import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {Account} from './account';

@Injectable()
export class AccountContext {

  account$: Observable<Account>;

  private subject: Subject<Account>;

  constructor() {
    this.subject = new BehaviorSubject<Account>(null);
    this.account$ = this.subject.asObservable();
  }

  observeData(data: {account: Account}) {
    this.subject.next(data.account);
  }

}
