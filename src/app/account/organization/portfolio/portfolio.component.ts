import {Component, OnInit, OnDestroy} from "@angular/core";
import {TransactionRepository} from "./transaction-repository.service";
import {Transaction} from "./transaction";
import {Organization} from "../organization";
import {Account} from "../../account";
import {Subscription} from "rxjs";
import {Filter} from "../filter";
import {AccountContext} from "../../account-context.service";
import {OrganizationContext} from "../organization-context.service";
import {FilterContext} from "../filter-context.service";

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
      this.organizationCtx.accountAndOrganization$
        .flatMap(data => this.repository.findAll(data.account, data.organization))
        .subscribe(transactions => this.transactions = transactions)
    );
  }

  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
  }

}
