import { OnInit, OnDestroy, Component } from '@angular/core';
import { Organization } from './organization';
import { Subscription } from 'rxjs';
import { OrganizationRepository } from './organization-repository.service';
import { Router } from '@angular/router';
import { OrganizationContext } from './organization-context.service';
import { AccountContext } from '../account-context.service';

@Component({
  selector: 'app-organization-select',
  templateUrl: './organization-select.component.html'
})
export class OrganizationSelectComponent implements OnInit, OnDestroy {

  current: Organization;

  organizations: Organization[];
  
  private subs: Subscription[] = [];

  constructor(private accountCtx: AccountContext,
              private orgCtx: OrganizationContext,
              private repository: OrganizationRepository,
              private router: Router) {
  }

  ngOnInit(): void {
    this.subs.push(
      this.orgCtx.data$
        .subscribe(org => this.current = org),
      this.accountCtx.data$
        .flatMap(acc => this.repository.findAll(acc))
        .subscribe(orgs => this.organizations = orgs)
    );
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
  }

  select(organizationId: number) {
    const tree = this.router.parseUrl(this.router.url);
    let segments = tree.root.children['primary'].segments;
    if (organizationId) {
      let path = organizationId.toString();
      if (segments[3]) {
        segments[3].path = path;
      } else {
        segments[3] = { path: path, parameters: {} };
      }
    } else {
      tree.root.children['primary'].segments = segments.slice(0, 3);
    }
    this.router.navigateByUrl(tree);
  }

}
