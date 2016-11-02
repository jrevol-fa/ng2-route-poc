import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Account } from './account';
import { AccountRepository } from './account-repository';
import { Router } from '@angular/router';

@Component({
    selector: 'app-account-select',
    templateUrl: './account-select.component.html'
})
export class AccountSelectComponent implements OnInit, OnDestroy {

    @Input()
    current: Account;

    accounts: Account[];
    private accountsSub: Subscription;

    constructor(private repository: AccountRepository,
                private router: Router) {
    }

    ngOnInit() {
        this.accountsSub = this.repository.findAll().subscribe(accounts => this.accounts = accounts);
    }

    ngOnDestroy() {
        this.accountsSub.unsubscribe();
    }

    select(accountId: number) {
        console.log(`${this.router.routerState.snapshot.url}`);
        console.log(`account:${accountId}, route: ${this.router.routerState}`);
    }

}
