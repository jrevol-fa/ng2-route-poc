import { Component, OnInit, OnDestroy } from '@angular/core';
import { Organization } from './organization';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { OrganizationRepository } from './organization-repository.service';
import { Account } from '../account';

@Component({
    templateUrl: './organization.component.html'
})
export class OrganizationComponent implements OnInit, OnDestroy {

    organization: Organization;
    private organizationSub: Subscription;
    choices: Organization[];
    private choicesSub: Subscription;

    constructor(private route: ActivatedRoute,
                private repository: OrganizationRepository) {
    }

    ngOnInit() {
        this.organizationSub = this.route.data.subscribe((data: {organization: Organization}) => this.organization = data.organization);
        let account = this.route.snapshot.data[ 'account' ] as Account;
        this.choicesSub = this.repository.findAll(account).subscribe(choices => this.choices = choices);
    }

    ngOnDestroy() {
        this.organizationSub.unsubscribe();
    }
}
