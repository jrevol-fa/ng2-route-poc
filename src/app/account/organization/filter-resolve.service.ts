import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Filter } from './filter';
import { FilterRepository } from './filter-repository.service';
import { OrganizationRepository } from './organization-repository.service';
import { ORGANIZATION_ID, FILTER_ID } from './index';
import { Injectable } from '@angular/core';
import { ACCOUNT_ID } from '../index';
import { AccountRepository } from '../account-repository';

@Injectable()
export class FilterResolve implements Resolve<Filter> {

    constructor(private repository: FilterRepository,
                private organizationRepository: OrganizationRepository,
                private accountRepository: AccountRepository) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Filter> {
        let accountId = +route.params[ ACCOUNT_ID ];
        let organizationId = +route.params[ ORGANIZATION_ID ];
        let filterId = +route.params[ FILTER_ID ];

        return this.accountRepository.findAll()
            .map(accounts => accounts.find(account => account.id === accountId))
            .flatMap(account => this.organizationRepository.findAll(account)
                .map(organizations => organizations.find(organization => organization.id == organizationId))
                .flatMap(organization => this.repository.findAll(account, organization))
                .map(filters => filters.find(filter => filter.id == filterId)));
    }

}
