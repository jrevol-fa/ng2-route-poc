import { Component, OnInit, OnDestroy } from '@angular/core';
import { Filter } from './filter';
import { Subscription, Observable } from 'rxjs';
import { FilterRepository } from './filter-repository.service';
import { Router } from '@angular/router';
import { Organization } from './organization';
import { Account } from '../account';
import { FILTER_ID } from './index';
import { FilterContext } from './filter-context.service';
import { AccountContext } from '../account-context.service';
import { OrganizationContext } from './organization-context.service';

@Component({
  selector: 'app-filter-select',
  templateUrl: './filter-select.component.html'
})
export class FilterSelectComponent implements OnInit, OnDestroy {

  current: Filter;

  filters: Filter[];

  private subs: Subscription[] = [];

  constructor(private accountCtx: AccountContext,
              private orgCtx: OrganizationContext,
              private filterCtx: FilterContext,
              private repository: FilterRepository,
              private router: Router) {
  }

  ngOnInit() {
    let accountAndOrganization$ = Observable.combineLatest(
      this.accountCtx.data$,
      this.orgCtx.data$,
      (account: Account, org: Organization) => {
        return { account: account, organization: org }
      });
    this.subs.push(
      accountAndOrganization$
        .flatMap((data: {account: Account, organization: Organization}) => this.repository.findAll(data.account, data.organization))
        .subscribe(filters => this.filters = filters),
      this.filterCtx.data$.subscribe(fil => this.current = fil)
    );
  }

  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
  }

  select(filterId: number) {
    const tree = this.router.parseUrl(this.router.url);
    if (filterId) {
      tree.root.children['primary'].segments[3].parameters[FILTER_ID] = filterId.toString();
    } else {
      delete tree.root.children['primary'].segments[3].parameters[FILTER_ID];
    }
    this.router.navigateByUrl(tree);
  }

}
