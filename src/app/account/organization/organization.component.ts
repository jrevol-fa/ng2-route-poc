import {Component, OnInit, OnDestroy} from '@angular/core';
import {Organization} from './organization';
import {Subscription, Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {OrganizationContext} from './organization-context.service';
import {AccountContext} from '../account-context.service';
import {Account} from '../account';
import {FilterContext} from './filter-context.service';
import {Filter} from './filter';

@Component({
  templateUrl: './organization.component.html'
})
export class OrganizationComponent implements OnInit, OnDestroy {

  organization: Organization;

  private subs: Subscription[] = [];

  constructor(private route: ActivatedRoute,
              private accountCtx: AccountContext,
              private organizationCtx: OrganizationContext,
              private filterCtx: FilterContext) {
  }

  ngOnInit() {
    this.subs.push(
      this.route.data.subscribe((data: {organization: Organization}) => this.organizationCtx.observeData(data)),
      this.route.data.subscribe((data: {filter: Filter}) => this.filterCtx.observeData(data)),
      this.organizationCtx.organization$.subscribe(organization => this.organization = organization)
    );
  }

  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
  }

  get account$(): Observable<Account> {
    return this.accountCtx.account$;
  }

}
