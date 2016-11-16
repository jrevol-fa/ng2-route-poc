import { Subscription } from 'rxjs';
import { CurrencyRepository } from './currency-repository.service';
import { Router } from '@angular/router';
import { OnInit, OnDestroy, Component } from '@angular/core';
import { Currency } from './currency';
import { CURRENCY_CODE } from '../index';
import { CurrencyContext } from './currency-context.service';

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
              private router: Router) {
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
    const tree = this.router.parseUrl(this.router.url);
    if (code) {
      tree.root.children['primary'].segments[0].parameters[CURRENCY_CODE] = code;
    } else {
      delete tree.root.children['primary'].segments[0].parameters[CURRENCY_CODE];
    }
    this.router.navigateByUrl(tree);
  }

}
