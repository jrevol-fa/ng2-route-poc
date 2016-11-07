import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {Account} from "./account";

@Injectable()
export class AccountContext {

  private subject: Subject<Account> = new BehaviorSubject<Account>(null);

  get account$(): Observable<Account> {
    return this.subject.asObservable();
  }

  observeData(data: {account: Account}) {
    this.subject.next(data.account);
  }

}
