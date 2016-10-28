import { Component, OnInit, OnDestroy } from '@angular/core';
import { Organization } from './organization';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './organization.component.html'
})
export class OrganizationComponent implements OnInit, OnDestroy {

    organization: Organization;
    private sub: Subscription;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.sub = this.route.data.subscribe((data: {organization: Organization}) => this.organization = data.organization);
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
