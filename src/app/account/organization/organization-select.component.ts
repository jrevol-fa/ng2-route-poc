import { OnInit, OnDestroy, Component } from '@angular/core';
import { Organization } from './organization';
import { Subscription } from 'rxjs';
import { OrganizationRepository } from './organization-repository.service';
import { OrganizationContext } from './organization-context.service';
import { AccountContext } from '../account-context.service';
import { RouterHelper } from '../../shared/router-helper.service';

@Component({
  selector: 'app-organization-select',
  templateUrl: './organization-select.component.html'
})
export class OrganizationSelectComponent implements OnInit, OnDestroy {

  current: Organization;

  organizations: Organization[];

  private subs: Subscription[];

  constructor(private accountCtx: AccountContext,
              private orgCtx: OrganizationContext,
              private repository: OrganizationRepository,
              private routerHelper: RouterHelper) {
  }

  ngOnInit(): void {
    this.subs = [
      this.orgCtx.data$
        .subscribe(org => this.current = org),
      this.accountCtx.data$
        .flatMap(acc => this.repository.findAll(acc))
        .subscribe(orgs => this.organizations = orgs)
    ];
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
  }

  select(organizationId: number) {
    this.routerHelper.selectRequired(organizationId, 3);
  }

}
