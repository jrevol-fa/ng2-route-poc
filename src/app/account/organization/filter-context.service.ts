import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {Filter} from './filter';
import {AccountContext} from '../account-context.service';
import {OrganizationContext} from './organization-context.service';
import {Organization} from './organization';
import {Account} from '../account';
import {FilterRepository} from './filter-repository.service';

@Injectable()
export class FilterContext {

  data$: Observable<Filter>;

  private subject: Subject<number>;

  constructor(accountCtx: AccountContext,
              orgCtx: OrganizationContext,
              repository: FilterRepository) {
    this.subject = new BehaviorSubject(null);

    this.data$ = Observable.combineLatest(
      accountCtx.data$,
      orgCtx.data$,
      this.subject.asObservable(),
      (account: Account, org: Organization, filterId: number) => {
        return {account: account, org: org, filterId: filterId};
      }
    ).flatMap((data: {account: Account, org: Organization, filterId: number}) =>
      repository.findOne(data.account, data.org, data.filterId));
  }

  observeId(filterId: number) {
    this.subject.next(filterId);
  }

}
