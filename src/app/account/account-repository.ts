import { Injectable } from '@angular/core';
import { Account } from './account';
import { Observable } from 'rxjs';

@Injectable()
export class AccountRepository {

    private accounts: Account[] = [
        { id: 123, name: 'My Kingdom' },
        { id: 456, name: 'My Empire' }
    ];

    findAll(): Observable<Account[]> {
        return Observable.of(this.accounts);
    }

}