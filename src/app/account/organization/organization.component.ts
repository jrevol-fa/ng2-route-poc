import {Component, OnInit, OnDestroy} from "@angular/core";
import {Organization} from "./organization";
import {Subscription, Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {OrganizationContext} from "./organization-context.service";
import {AccountContext} from "../account-context.service";
import {Account} from "../account";

@Component({
  templateUrl: './organization.component.html'
})
export class OrganizationComponent implements OnInit, OnDestroy {

  organization: Organization;

  private subs: Subscription[] = [];

  constructor(private route: ActivatedRoute,
              private context: OrganizationContext,
              private accountContext: AccountContext) {
  }

  ngOnInit() {
    this.subs.push(
      this.route.data.subscribe((data: {organization: Organization}) => this.context.observeData(data)),
      this.context.organization$.subscribe(organization => this.organization = organization)
    );
  }

  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
  }

  get account$(): Observable<Account> {
    return this.accountContext.account$;
  }

}
