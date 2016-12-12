import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Account } from './account';
import { AccountContext } from './account-context.service';
import { ACCOUNT_ID } from './index';
import { CurrencyContext } from '../shared/currency-context.service';
import { CURRENCY_CODE } from '../index';

@Component({
  templateUrl: './account.component.html'
})
export class AccountComponent implements OnInit, OnDestroy {

  account: Account;
  private subs: Subscription[];

  constructor(private route: ActivatedRoute,
              private accountCtx: AccountContext,
              private currCtx: CurrencyContext) {
  }

  ngOnInit() {
    this.subs = [
      this.route.params.subscribe((params: {accountId}) =>
        this.accountCtx.id = params[ACCOUNT_ID]),
      this.route.parent.params.subscribe((params: {currency}) =>
        this.currCtx.code = params[CURRENCY_CODE]),
      this.accountCtx.data$.subscribe(account =>
        this.account = account)
    ];
  }

  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
  }

}
