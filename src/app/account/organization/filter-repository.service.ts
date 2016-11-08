import {Injectable} from '@angular/core';
import {Filter} from './filter';
import {Observable} from 'rxjs';
import {Organization} from './organization';
import {Account} from '../account';
import {Http} from '@angular/http';

@Injectable()
export class FilterRepository {

  constructor(private http: Http) {
  }

  findAll(account: Account, organization: Organization): Observable<Filter[]> {
    return this.http.get('./assets/data.json')
      .map(res => res.json().accounts)
      .filter(accs => accs)
      .map(accs => accs.find(acc => acc.id === account.id))
      .filter(acc => acc)
      .map(acc => acc.organizations)
      .filter(orgs => orgs)
      .map(orgs => orgs.find(org => org.id === organization.id))
      .filter(org => org)
      .map(org => org.filters)
      .map(fils => fils as Filter[]);
  }

  findOne(account: Account, organization: Organization, id: number) {
    return this.http.get('./assets/data.json')
      .map(res => res.json().accounts)
      .filter(accs => accs)
      .map(accs => accs.find(acc => acc.id === account.id))
      .filter(acc => acc)
      .map(acc => acc.organizations)
      .filter(orgs => orgs)
      .map(orgs => orgs.find(org => org.id === organization.id))
      .filter(org => org)
      .map(org => org.filters)
      .find(fils => fils.find(fil => fil.id === id))
      .map(fil => fil as Filter);
  }
}
