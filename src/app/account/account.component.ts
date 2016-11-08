import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {Account} from './account';
import {AccountContext} from './account-context.service';
import {ACCOUNT_ID} from './index';

@Component({
  templateUrl: './account.component.html'
})
export class AccountComponent implements OnInit, OnDestroy {

  account: Account;
  private subs: Subscription[] = [];

  constructor(private route: ActivatedRoute,
              private context: AccountContext) {
  }

  ngOnInit() {
    this.subs.push(
      this.route.params.subscribe(params => this.context.observeId(+params[ACCOUNT_ID])),
      this.context.data$.subscribe(account => this.account = account)
    );
  }

  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
  }

}
