import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { Currency } from './currency';
import { CurrencyRepository } from './currency-repository.service';

@Injectable()
export class CurrencyContext {

  data$: Observable<Currency>;

  private subject: Subject<string>;

  constructor(repository: CurrencyRepository) {
    this.subject = new BehaviorSubject(null);
    this.data$ = this.subject.asObservable().flatMap(code => repository.findOne(code));
  }

  observeCode(code: string) {
    this.subject.next(code);
  }

}
