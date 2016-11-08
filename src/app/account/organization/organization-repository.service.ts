import {Injectable} from '@angular/core';
import {Organization} from './organization';
import {Account} from '../account';
import {Observable} from 'rxjs';

@Injectable()
export class OrganizationRepository {

  private organizations: Organization[] = [
    {id: 123, name: 'My Castle'},
    {id: 456, name: 'My Palace'}
  ];

  findAll(account: Account): Observable<Organization[]> {
    console.log(`Find all organizations for account: ${JSON.stringify(account)}`);
    return Observable.of(this.organizations).delay(100);
  }

  findOne(account: Account, id: number): Observable<Organization> {
    console.log(`Find one organization for account: ${JSON.stringify(account)} and id: ${id}`);
    return Observable.of(this.organizations).delay(100).map(organizations => organizations.find(organization => organization.id === id));
  }
}
