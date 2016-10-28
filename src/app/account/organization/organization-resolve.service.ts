import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Organization } from './organization';
import { Observable } from 'rxjs';
import { OrganizationRepository } from './organization-repository.service';
import { ORGANIZATION_ID } from './';
import { Account } from '../account';

@Injectable()
export class OrganizationResolve implements Resolve<Organization> {

    constructor(private repository: OrganizationRepository) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Organization> {
        let organizationId = +route.params[ ORGANIZATION_ID ];
        let account = route.data[ 'account' ] as Account;
        return this.repository.findAll(account)
            .map(organizations => organizations.find(organization => organization.id == organizationId));
    }
}
