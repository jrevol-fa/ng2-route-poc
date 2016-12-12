import { Injectable } from '@angular/core';
import { Organization } from './organization';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import 'rxjs/add/operator/combineLatest';
import { AccountContext } from '../account-context.service';
import { Account } from '../account';
import { OrganizationRepository } from './organization-repository.service';

@Injectable()
export class OrganizationContext {

  data$: Observable<Organization>;

  private subject: Subject<string>;

  constructor(accountCtx: AccountContext,
              repository: OrganizationRepository) {
    this.subject = new BehaviorSubject(null);

    this.data$ = Observable.combineLatest(accountCtx.data$, this.subject.asObservable())
      .flatMap((data: any[]) =>
        repository.findOne(data[0] as Account, data[1]));
  }

  set id(orgId: string) {
    this.subject.next(orgId);
  }

}
