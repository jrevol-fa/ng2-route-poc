import { Organization } from '../organization';
import { Account } from '../../account';
import { Transaction } from './transaction';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Filter } from '../filter';

@Injectable()
export class TransactionRepository {

    private transactions: Transaction[] = [
        { id: 123, name: 'Loan ABC' },
        { id: 345, name: 'Swap DEF' },
        { id: 789, name: 'Cap GHI' }
    ];

    findAll(account: Account, organization: Organization, filter?: Filter): Observable<Transaction[]> {
        return Observable.of(this.transactions);
    }
}