import { Subscription } from 'rxjs';
import { CurrencyRepository } from './currency-repository.service';
import { OnInit, OnDestroy, Component } from '@angular/core';
import { Currency } from './currency';
import { CURRENCY_CODE } from '../index';
import { CurrencyContext } from './currency-context.service';
import { RouterHelper } from './router-helper.service';

@Component({
  selector: 'app-currency-select',
  templateUrl: './currency-select.component.html'
})
export class CurrencySelectComponent implements OnInit, OnDestroy {

  current: Currency;

  currencies: Currency[];
  private subs: Subscription[] = [];

  constructor(private ctx: CurrencyContext,
              private repository: CurrencyRepository,
              private routerHelper: RouterHelper) {
  }

  ngOnInit() {
    this.subs.push(
      this.ctx.data$.subscribe(curr => this.current = curr),
      this.repository.findAll().subscribe(currs => this.currencies = currs)
    );
  }

  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
  }

  select(code: string) {
    this.routerHelper.selectOptional(code, 0, CURRENCY_CODE);
  }

}
