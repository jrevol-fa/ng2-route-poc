import {Component, OnInit, OnDestroy} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {Account} from "./account";
import {AccountContext} from "./account-context.service";

@Component({
  templateUrl: './account.component.html'
})
export class AccountComponent implements OnInit, OnDestroy {

  account: Account;
  private accountSub: Subscription;

  private dataSub: Subscription;

  constructor(private route: ActivatedRoute,
              private context: AccountContext) {
  }

  ngOnInit() {
    this.dataSub = this.route.data.subscribe(this.context.observeData);
    this.accountSub = this.context.account$.subscribe(account => this.account = account);
  }

  ngOnDestroy() {
    this.accountSub.unsubscribe();
    this.dataSub.unsubscribe();
  }

}
