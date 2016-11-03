import { OnInit, OnDestroy, Component, Input } from '@angular/core';
import { Organization } from './organization';
import { Subscription } from 'rxjs';
import { OrganizationRepository } from './organization-repository.service';
import { Account } from '../account';
import { Router } from '@angular/router';

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

    constructor(private repository: OrganizationRepository,
                private router: Router) {
    }

    ngOnInit(): void {
        this.organizationsSub = this.repository.findAll(this.account)
            .subscribe(organizations => this.organizations = organizations);
    }

    ngOnDestroy(): void {
        this.organizationsSub.unsubscribe();
    }

    select(organizationId: number) {
        let relativeTo = this.router.routerState.root.firstChild;
        while (relativeTo && relativeTo.routeConfig.path !== 'organization') {
            relativeTo = relativeTo.firstChild;
        }
        let path: any[] = [ organizationId ];
        let current = relativeTo.firstChild.firstChild;
        while (current) {
            path.push(...current.snapshot.url.map(segment => segment.path));
            current = current.firstChild;
        }
        this.router.navigate(path, { relativeTo: relativeTo });
    }

}
