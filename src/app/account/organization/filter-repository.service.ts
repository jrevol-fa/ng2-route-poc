import { Injectable } from '@angular/core';
import { Filter } from './filter';
import { Observable } from 'rxjs';
import { Organization } from './organization';
import { Account } from '../account';

@Injectable()
export class FilterRepository {

    private filters: Filter[] = [
        { id: 123, name: 'My loans' },
        { id: 456, name: 'My derivatives' }
    ];

    findAll(account: Account, organization: Organization): Observable<Filter[]> {
        return Observable.of(this.filters);
    }
}