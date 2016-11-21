import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Account } from './account';
import { AccountRepository } from './account-repository';
import { AccountContext } from './account-context.service';
import { RouterHelper } from '../shared/router-helper.service';

@Component({
  selector: 'app-account-select',
  templateUrl: './account-select.component.html'
})
export class AccountSelectComponent implements OnInit, OnDestroy {

  current: Account;

  accounts: Account[];

  private subs: Subscription[];

  constructor(private ctx: AccountContext,
              private repository: AccountRepository,
              private routerHelper: RouterHelper) {
  }

  ngOnInit() {
    this.subs = [
      this.ctx.data$.subscribe(acc => this.current = acc),
      this.repository.findAll().subscribe(accs => this.accounts = accs)
    ];
  }

  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
  }

  select(accountId: number) {
    this.routerHelper.selectRequired(accountId, 1);
  }

}
