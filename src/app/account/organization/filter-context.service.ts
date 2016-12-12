import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Filter } from './filter';
import { AccountContext } from '../account-context.service';
import { OrganizationContext } from './organization-context.service';
import { Organization } from './organization';
import { Account } from '../account';
import { FilterRepository } from './filter-repository.service';

@Injectable()
export class FilterContext {

  data$: Observable<Filter>;

  private subject: Subject<string>;

  constructor(accountCtx: AccountContext,
              orgCtx: OrganizationContext,
              repository: FilterRepository) {
    this.subject = new BehaviorSubject(null);

    this.data$ = Observable.combineLatest(accountCtx.data$, orgCtx.data$, this.subject.asObservable())
      .flatMap((data: any[]) =>
        repository.findOne(data[0] as Account, data[1] as Organization, data[2]));
  }

  set id(filterId: string) {
    this.subject.next(filterId);
  }

}
