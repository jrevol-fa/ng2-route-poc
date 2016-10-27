import { Injectable } from '@angular/core';
import { Organization } from './organization';
import { Account } from '../account';
import { Observable } from 'rxjs';

@Injectable()
export class OrganizationRepository {

    private organizations: Organization[] = [
        { id: 123, name: 'My castle' }
    ];

    findAll(account: Account): Observable<Organization[]> {
        return Observable.of(this.organizations);
    }
}