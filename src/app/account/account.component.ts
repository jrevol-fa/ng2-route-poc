import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Account } from './account';

@Component({
    templateUrl: './account.component.html'
})
export class AccountComponent implements OnInit, OnDestroy {

    account: Account;
    private sub: Subscription;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.sub = this.route.data.subscribe((data: {account: Account}) => this.account = data.account);
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}
