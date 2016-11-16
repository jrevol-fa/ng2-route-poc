import { Currency } from './currency';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CurrencyRepository {

  constructor(private http: Http) {
  }

  findAll(): Observable<Currency[]> {
    return this.http.get('./assets/data.json')
      .map(res => res.json().currencies)
      .map(currs => currs as Currency[]);
  }

  findOne(code: string): Observable<Currency> {
    if (code) {
      return this.http.get('./assets/data.json')
        .map(res => res.json().currencies)
        .map(currs => currs ? currs.find(curr => curr.code === code) : undefined)
        .map(curr => curr as Currency);
    }
    return Observable.of(undefined);
  }

}
