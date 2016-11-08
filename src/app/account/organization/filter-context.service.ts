import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {Filter} from './filter';

@Injectable()
export class FilterContext {

  data$: Observable<Filter>;

  private subject: Subject<Filter>;

  constructor() {
    this.subject = new BehaviorSubject<Filter>(null);
    this.data$ = this.subject.asObservable();
  }

  observeData(data: {filter: Filter}) {
    this.subject.next(data.filter);
  }

}
