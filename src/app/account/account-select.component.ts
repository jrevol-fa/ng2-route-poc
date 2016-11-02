import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Account } from './account';
import { AccountRepository } from './account-repository';
import { Router, ActivatedRoute } from '@angular/router';

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
                private route: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit() {
        this.accountsSub = this.repository.findAll().subscribe(accounts => this.accounts = accounts);
    }

    ngOnDestroy() {
        this.accountsSub.unsubscribe();
    }

    select(accountId: number) {
        let relativeTo = this.router.routerState.root.firstChild;
        while (relativeTo && relativeTo.routeConfig.path !== 'account') {
            relativeTo = relativeTo.firstChild;
        }
        let path: any[] = [ accountId ];
        let current = relativeTo.firstChild.firstChild;
        while (current) {
            path.push(...current.snapshot.url.map(segment => segment.path));
            current = current.firstChild;
        }
        this.router.navigate(path, { relativeTo: relativeTo });
    }

}
