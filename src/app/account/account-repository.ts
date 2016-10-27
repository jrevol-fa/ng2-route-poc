import { Injectable } from '@angular/core';
import { Account } from './account';
import { Observable } from 'rxjs';

@Injectable()
export class AccountRepository {

    private accounts: Account[] = [
        { id: 123, name: 'My Kingdom' }
    ];

    findAll(): Observable<Account[]> {
        return Observable.of(this.accounts);
    }

}