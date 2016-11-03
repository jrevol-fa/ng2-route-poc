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
        const tree = this.router.parseUrl(this.router.url);
        tree.root.children[ 'primary' ].segments[ 1 ].path = accountId.toString();
        this.router.navigateByUrl(tree);
    }

}
