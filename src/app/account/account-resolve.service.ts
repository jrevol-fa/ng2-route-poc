import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Account } from './account';
import { Observable } from 'rxjs';

@Injectable()
export class AccountResolve implements Resolve<Account> {
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Account> {
        return Observable.of(null);
    }
}
