import {Injectable} from '@angular/core';
import {Filter} from './filter';
import {Observable} from 'rxjs';
import {Organization} from './organization';
import {Account} from '../account';

@Injectable()
export class FilterRepository {

  private filters: Filter[] = [
    {id: 123, name: 'My loans'},
    {id: 456, name: 'My derivatives'}
  ];

  findAll(account: Account, organization: Organization): Observable<Filter[]> {
    console.log(`Find all filters for account: ${JSON.stringify(account)} and organization: ${JSON.stringify(organization)}`);
    return Observable.of(this.filters).delay(100);
  }

  findOne(account: Account, organization: Organization, id: number) {
    console.log(`Find one filter for account: ${JSON.stringify(account)}, organization: ${JSON.stringify(organization)} and id: ${id}`);
    return Observable.of(this.filters).delay(100).map(filters => filters.find(filter => filter.id === id));
  }
}
