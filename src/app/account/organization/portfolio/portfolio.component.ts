import {Component, OnInit, OnDestroy} from '@angular/core';
import {TransactionRepository} from './transaction-repository.service';
import {Transaction} from './transaction';
import {Organization} from '../organization';
import {Account} from '../../account';
import {Subscription, Observable} from 'rxjs';
import {Filter} from '../filter';
import {FilterContext} from '../filter-context.service';
import {AccountContext} from '../../account-context.service';
import {OrganizationContext} from '../organization-context.service';

@Component({
  templateUrl: './portfolio.component.html'
})
export class PortfolioComponent implements OnInit, OnDestroy {

  account: Account;
  organization: Organization;
  filter: Filter;

  transactions: Transaction[];
  private subs: Subscription[] = [];

  constructor(private accountCtx: AccountContext,
              private organizationCtx: OrganizationContext,
              private filterCtx: FilterContext,
              private repository: TransactionRepository) {
  }

  ngOnInit() {
    this.subs.push(
      this.accountCtx.account$.subscribe(account => this.account = account),
      this.organizationCtx.organization$.subscribe(organization => this.organization = organization),
      this.filterCtx.filter$.subscribe(filter => this.filter = filter),
      this.accountAndOrganizationAndFilter$
        .flatMap(data => this.repository.findAll(data.account, data.organization, data.filter))
        .subscribe(transactions => this.transactions = transactions)
    );
  }

  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
  }

  private get accountAndOrganizationAndFilter$(): Observable<{account: Account, organization: Organization, filter: Filter}> {
    return Observable.combineLatest(
      this.accountCtx.account$,
      this.organizationCtx.organization$,
      this.filterCtx.filter$,
      (account, organization, filter) => {
        return {account: account, organization: organization, filter: filter}
      }
    );
  }

}
