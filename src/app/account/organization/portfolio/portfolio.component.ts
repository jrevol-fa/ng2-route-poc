import {Component, OnInit, OnDestroy} from "@angular/core";
import {TransactionRepository} from "./transaction-repository.service";
import {ActivatedRoute} from "@angular/router";
import {Transaction} from "./transaction";
import {Organization} from "../organization";
import {Account} from "../../account";
import {Subscription} from "rxjs";
import {Filter} from "../filter";

@Component({
  templateUrl: './portfolio.component.html'
})
export class PortfolioComponent implements OnInit, OnDestroy {

  account: Account;
  organization: Organization;
  filter: Filter;

  transactions: Transaction[];
  private subs: Subscription[] = [];

  constructor(private route: ActivatedRoute,
              private repository: TransactionRepository) {
  }

  ngOnInit() {
    this.subs.push(
      this.route.data
        .subscribe((data: {account: Account, organization: Organization, filter: Filter}) => {
          this.account = data.account;
          this.organization = data.organization;
          this.filter = data.filter;
        }),
      this.route.data
        .flatMap((data: {account: Account, organization: Organization}) =>
          this.repository.findAll(data.account, data.organization))
        .subscribe(transactions => this.transactions = transactions)
    );
  }

  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
  }

}
