import {Injectable} from '@angular/core';
import {Organization} from './organization';
import {Subject, BehaviorSubject, Observable} from 'rxjs';
import 'rxjs/add/operator/combineLatest';

@Injectable()
export class OrganizationContext {

  organization$: Observable<Organization>;

  private subject: Subject<Organization>;

  constructor() {
    this.subject = new BehaviorSubject(null);
    this.organization$ = this.subject.asObservable();
  }

  observeData(data: {organization: Organization}) {
    this.subject.next(data.organization);
  }

}
