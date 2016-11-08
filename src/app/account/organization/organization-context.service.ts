import {Injectable} from '@angular/core';
import {Organization} from './organization';
import {Subject, BehaviorSubject, Observable} from 'rxjs';
import 'rxjs/add/operator/combineLatest';
import {AccountContext} from '../account-context.service';
import {Account} from '../account';
import {OrganizationRepository} from './organization-repository.service';

@Injectable()
export class OrganizationContext {

  data$: Observable<Organization>;

  private subject: Subject<number>;

  constructor(accountCtx: AccountContext,
              repository: OrganizationRepository) {
    this.subject = new BehaviorSubject(null);

    this.data$ = Observable.combineLatest(
      accountCtx.data$,
      this.subject.asObservable(),
      (account: Account, id: number) => {
        return {account: account, orgId: id};
      }
    ).flatMap((data: {account: Account, orgId: number}) =>
      repository.findOne(data.account, data.orgId));
  }

  observeId(orgId: number) {
    this.subject.next(orgId);
  }

}
