import { OnInit, OnDestroy, Component, Input } from '@angular/core';
import { Organization } from './organization';
import { Subscription } from 'rxjs';
import { OrganizationRepository } from './organization-repository.service';
import { Account } from '../account';

@Component({
    selector: 'app-organization-select',
    templateUrl: './organization-select.component.html'
})
export class OrganizationSelectComponent implements OnInit, OnDestroy {

    @Input()
    account: Account;

    @Input()
    current: Organization;

    organizations: Organization[];
    private organizationsSub: Subscription;

    constructor(private repository: OrganizationRepository) {
    }

    ngOnInit(): void {
        this.organizationsSub = this.repository.findAll(this.account)
            .subscribe(organizations => this.organizations = organizations);
    }

    ngOnDestroy(): void {
        this.organizationsSub.unsubscribe();
    }

}
