import {Injectable} from '@angular/core';
import {Organization} from './organization';
import {Account} from '../account';
import {Observable} from 'rxjs';
import {Http} from '@angular/http';

@Injectable()
export class OrganizationRepository {

  constructor(private http: Http) {
  }

  findAll(account: Account): Observable<Organization[]> {
    return this.http.get('./assets/data.json')
      .map(res => res.json().accounts)
      .filter(accs => accs)
      .map(accs => accs.find(acc => acc.id === account.id))
      .filter(acc => acc)
      .map(acc => acc.organizations)
      .map(orgs => orgs as Organization[]);
  }

  findOne(account: Account, id: number): Observable<Organization> {
    return this.http.get('./assets/data.json')
      .map(res => res.json().accounts)
      .filter(accs => accs)
      .map(accs => accs.find(acc => acc.id === account.id))
      .filter(acc => acc)
      .map(acc => acc.organizations)
      .filter(orgs => orgs)
      .map(acc => acc.find(org => org.id === id))
      .map(org => org as Organization);
  }

}
