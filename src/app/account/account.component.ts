import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Account } from './account';
import { AccountRepository } from './account-repository';

@Component({
    templateUrl: './account.component.html'
})
export class AccountComponent implements OnInit, OnDestroy {

    account: Account;
    private accountSub: Subscription;
    choices: Account[];
    private choicesSub: Subscription;

    constructor(private route: ActivatedRoute,
                private repository: AccountRepository) {
    }

    ngOnInit() {
        this.accountSub = this.route.data.subscribe((data: {account: Account}) => this.account = data.account);
        this.choicesSub = this.repository.findAll().subscribe(choices => this.choices = choices);
    }

    ngOnDestroy() {
        this.accountSub.unsubscribe();
    }

}
