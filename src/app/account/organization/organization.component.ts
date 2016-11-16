import { Component, OnInit, OnDestroy } from '@angular/core';
import { Organization } from './organization';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { OrganizationContext } from './organization-context.service';
import { FilterContext } from './filter-context.service';

@Component({
  templateUrl: './organization.component.html'
})
export class OrganizationComponent implements OnInit, OnDestroy {

  organization: Organization;

  private subs: Subscription[] = [];

  constructor(private route: ActivatedRoute,
              private orgCtx: OrganizationContext,
              private filterCtx: FilterContext) {
  }

  ngOnInit() {
    this.subs.push(
      this.route.params.subscribe((params: {organizationId}) => this.orgCtx.observeId(+params.organizationId)),
      this.route.params.subscribe((params: {filter}) => this.filterCtx.observeId(+params.filter)),
      this.orgCtx.data$.subscribe(organization => this.organization = organization)
    );
  }

  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
  }

}
