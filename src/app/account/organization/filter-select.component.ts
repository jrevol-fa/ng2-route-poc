import { Component, OnInit, OnDestroy } from '@angular/core';
import { Filter } from './filter';
import { Subscription, Observable } from 'rxjs';
import { FilterRepository } from './filter-repository.service';
import { Organization } from './organization';
import { Account } from '../account';
import { FILTER_ID } from './index';
import { FilterContext } from './filter-context.service';
import { AccountContext } from '../account-context.service';
import { OrganizationContext } from './organization-context.service';
import { RouterHelper } from '../../shared/router-helper.service';

@Component({
  selector: 'app-filter-select',
  templateUrl: './filter-select.component.html'
})
export class FilterSelectComponent implements OnInit, OnDestroy {

  current: Filter;

  filters: Filter[];

  private subs: Subscription[];

  constructor(private accountCtx: AccountContext,
              private orgCtx: OrganizationContext,
              private filterCtx: FilterContext,
              private repository: FilterRepository,
              private routerHelper: RouterHelper) {
  }

  ngOnInit() {
    this.subs = [
      Observable.combineLatest(this.accountCtx.data$, this.orgCtx.data$)
        .flatMap((data: any[]) =>
          this.repository.findAll(data[0] as Account, data[1] as Organization))
        .subscribe(filters => this.filters = filters),
      this.filterCtx.data$.subscribe(fil => this.current = fil)
    ];
  }

  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
  }

  select(filterId: string) {
    this.routerHelper.selectOptional(filterId, 3, FILTER_ID);
  }

}
