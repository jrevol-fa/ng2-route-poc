import { Component, OnInit, OnDestroy } from '@angular/core';
import { CurrencyContext } from './shared/currency-context.service';
import { Subscription } from 'rxjs';
import { Currency } from './shared/currency';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'TechItEasy!';

  currency: Currency;
  private subs: Subscription[];

  constructor(private currCtx: CurrencyContext) {
  }

  ngOnInit() {
    this.subs = [
      this.currCtx.data$.subscribe(curr => this.currency = curr)
    ];
  }

  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
  }

}
