import {Injectable} from "@angular/core";
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Organization} from "./organization";
import {Observable} from "rxjs";
import {OrganizationRepository} from "./organization-repository.service";
import {ORGANIZATION_ID} from "./";
import {AccountRepository} from "../account-repository";
import {ACCOUNT_ID} from "../index";

@Injectable()
export class OrganizationResolve implements Resolve<Organization> {

  constructor(private repository: OrganizationRepository,
              private accountRepository: AccountRepository) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Organization> {
    let accountId = +route.params[ACCOUNT_ID];
    let organizationId = +route.params[ORGANIZATION_ID];

    return this.accountRepository.findAll()
      .map(accounts => accounts.find(account => account.id === accountId))
      .flatMap(account => this.repository.findAll(account)
        .map(organizations => organizations.find(organization => organization.id === organizationId)));
  }
}
