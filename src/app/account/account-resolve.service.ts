import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {Account} from './account';
import {Observable} from 'rxjs';
import {AccountRepository} from './account-repository';
import {ACCOUNT_ID} from './';

@Injectable()
export class AccountResolve implements Resolve<Account> {

  constructor(private repository: AccountRepository) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Account> {
    let accountId = +route.params[ACCOUNT_ID];
    return this.repository.findOne(accountId)
      .map(account => {
        console.log(`Resolved account ${JSON.stringify(account)}`);
        return account;
      });
  }
}
