import { Injectable } from '@angular/core';
import { AccountContext } from '../../account-context.service';
import { OrganizationContext } from '../organization-context.service';
import { FilterContext } from '../filter-context.service';
import { Organization } from '../organization';
import { Filter } from '../filter';
import { Account } from '../../account';
import { Observable } from 'rxjs';

@Injectable()
export class PortfolioContext {

  data$: Observable<{account: Account, organization: Organization, filter: Filter}>;

  constructor(private accountCtx: AccountContext,
              private organizationCtx: OrganizationContext,
              private filterCtx: FilterContext) {
    this.data$ = Observable.combineLatest(
      this.accountCtx.data$,
      this.organizationCtx.data$,
      this.filterCtx.data$,
      (account, organization, filter) => {
        return { account: account, organization: organization, filter: filter };
      }
    );
  }

}
