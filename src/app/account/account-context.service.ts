import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Account } from './account';
import { AccountRepository } from './account-repository';

@Injectable()
export class AccountContext {

  data$: Observable<Account>;

  private subject: Subject<string>;

  constructor(repository: AccountRepository) {
    this.subject = new BehaviorSubject(null);
    this.data$ = this.subject.asObservable().flatMap(id => repository.findOne(id));
  }

  set id(accountId: string) {
    this.subject.next(accountId);
  }

}
