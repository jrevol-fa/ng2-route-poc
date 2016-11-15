import {Organization} from '../organization';
import {Account} from '../../account';
import {Transaction} from './transaction';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {Filter} from '../filter';
import {Http} from '@angular/http';

@Injectable()
export class TransactionRepository {

  constructor(private http: Http) {
  }

  findAll(account: Account, organization: Organization, filter: Filter): Observable<Transaction[]> {
    if (account && organization) {
      return this.http.get('./assets/data.json')
        .map(res => res.json().accounts)
        .map(accs => accs ? accs.find(acc => acc.id === account.id) : undefined)
        .map(acc => {
          let txs = acc && acc.transactions ? acc.transactions : [];
          let orgs = acc && acc.organizations ? acc.organizations : [];
          let org = orgs.find(org => org.id === organization.id);
          let fils = org && org.filters ? org.filters : [];
          let fil = fils.find(fil => filter && fil.id === filter.id);
          let orgTxIds: any[] = org && org.transaction_ids ? org.transaction_ids : [];
          return txs.filter(tx => orgTxIds.indexOf(tx.id) >= 0);
        })
        .map(txs => txs as Transaction[])
    }
    return Observable.of([]);
  }
}
