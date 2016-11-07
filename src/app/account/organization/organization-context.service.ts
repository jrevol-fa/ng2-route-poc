import {Injectable} from '@angular/core';
import {Organization} from './organization';
import {Subject, BehaviorSubject, Observable} from 'rxjs';
import {AccountContext} from '../account-context.service';
import {Account} from '../account';
import 'rxjs/add/operator/combineLatest';

@Injectable()
export class OrganizationContext {

  organization$: Observable<Organization>;
  accountAndOrganization$: Observable<{account: Account, organization: Organization}>;

  private subject: Subject<Organization>;

  constructor(private accountCtx: AccountContext) {
    this.subject = new BehaviorSubject(null);
    this.organization$ = this.subject.asObservable();

    this.accountAndOrganization$ = Observable.combineLatest(
      this.accountCtx.account$,
      this.organization$,
      (data: {account: Account, organization: Organization}) => {
        return {account: data.account, organization: data.organization};
      });
  }

  observeData(data: {organization: Organization}) {
    this.subject.next(data.organization);
  }

}
