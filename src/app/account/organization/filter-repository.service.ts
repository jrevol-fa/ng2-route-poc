import { Injectable } from '@angular/core';
import { Filter } from './filter';
import { Observable } from 'rxjs';
import { Organization } from './organization';
import { Account } from '../account';
import { Http } from '@angular/http';

@Injectable()
export class FilterRepository {

  constructor(private http: Http) {
  }

  findAll(account: Account, organization: Organization): Observable<Filter[]> {
    if (account && organization) {
      return this.http.get('./assets/data.json')
        .map(res => res.json().accounts)
        .map(accs => accs ? accs.find(acc => acc.id === account.id) : undefined)
        .map(acc => acc && acc.organizations ? acc.organizations : [])
        .map(orgs => orgs.find(org => org.id === organization.id))
        .map(org => org && org.filters ? org.filters : [])
        .map(fils => fils as Filter[]);
    }
    return Observable.of([]);
  }

  findOne(account: Account, organization: Organization, id: number) {
    if (account && organization && id) {
      return this.http.get('./assets/data.json')
        .map(res => res.json().accounts)
        .map(accs => accs ? accs.find(acc => acc.id === account.id) : undefined)
        .map(acc => acc && acc.organizations ? acc.organizations : [])
        .map(orgs => orgs.find(org => org.id === organization.id))
        .map(org => org && org.filters ? org.filters : [])
        .map(fils => fils.find(fil => fil.id === id))
        .map(fil => fil as Filter);
    }
    return Observable.of(undefined);
  }
}
