import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Organization} from './organization';
import {Observable} from 'rxjs';
import {OrganizationRepository} from './organization-repository.service';
import {ORGANIZATION_ID} from './';
import {RouteUtils} from '../../shared/route-utils';
import {DATA_ACCOUNT} from '../index';

@Injectable()
export class OrganizationResolve implements Resolve<Organization> {

  constructor(private repository: OrganizationRepository) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Organization> {
    let account = RouteUtils.extractData(route, DATA_ACCOUNT);
    let organizationId = +route.params[ORGANIZATION_ID];

    return this.repository.findOne(account, organizationId);
  }
}
