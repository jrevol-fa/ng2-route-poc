import { Injectable } from '@angular/core';
import { Organization } from './organization';
import { Account } from '../account';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';

@Injectable()
export class OrganizationRepository {

  constructor(private http: Http) {
  }

  findAll(account: Account): Observable<Organization[]> {
    if (account) {
      return this.http.get('./assets/data.json')
        .map(res => res.json().accounts)
        .map(accs => accs ? accs.find(acc => acc.id === account.id) : undefined)
        .map(acc => acc && acc.organizations ? acc.organizations : [])
        .map(orgs => orgs as Organization[]);
    }
    return Observable.of([]);
  }

  findOne(account: Account, id: number): Observable<Organization> {
    if (account && id) {
      return this.http.get('./assets/data.json')
        .map(res => res.json().accounts)
        .map(accs => accs ? accs.find(acc => acc.id === account.id) : undefined)
        .map(acc => acc && acc.organizations ? acc.organizations : [])
        .map(orgs => orgs.find(org => org.id === id))
        .map(org => org as Organization);
    }
    return Observable.of(undefined);
  }

}
