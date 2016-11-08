import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {Account} from './account';

@Injectable()
export class AccountContext {

  data$: Observable<Account>;

  private subject: Subject<Account>;

  constructor() {
    this.subject = new BehaviorSubject<Account>(null);
    this.data$ = this.subject.asObservable();
  }

  observeData(data: {account: Account}) {
    this.subject.next(data.account);
  }

}
