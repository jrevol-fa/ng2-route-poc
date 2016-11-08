import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Filter} from './filter';
import {FilterRepository} from './filter-repository.service';
import {OrganizationRepository} from './organization-repository.service';
import {ORGANIZATION_ID, FILTER_ID} from './index';
import {Injectable} from '@angular/core';
import {RouteUtils} from '../../shared/route-utils';
import {DATA_ACCOUNT} from '../index';

@Injectable()
export class FilterResolve implements Resolve<Filter> {

  constructor(private repository: FilterRepository,
              private organizationRepository: OrganizationRepository) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Filter> {
    let account = RouteUtils.extractData(route, DATA_ACCOUNT);
    let organizationId = +route.params[ORGANIZATION_ID];
    let filterId = +route.params[FILTER_ID];

    return this.organizationRepository.findOne(account, organizationId)
      .flatMap(organization => this.repository.findOne(account, organization, filterId))
      .map(filter => {
        console.log(`Resolved filter: ${JSON.stringify(filter)}`);
        return filter;
      });
  }

}
