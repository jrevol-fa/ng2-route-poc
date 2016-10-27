import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Organization } from './organization';
import { Observable } from 'rxjs';

@Injectable()
export class OrganizationResolve implements Resolve<Organization> {
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Organization> {
        return Observable.of(null);
    }
}
