import {Component, OnInit, OnDestroy, Input} from '@angular/core';
import {Subscription} from 'rxjs';
import {Account} from './account';
import {AccountRepository} from './account-repository';
import {Router} from '@angular/router';

@Component({
  selector: 'app-account-select',
  templateUrl: './account-select.component.html'
})
export class AccountSelectComponent implements OnInit, OnDestroy {

  @Input()
  current: Account;

  accounts: Account[];
  private subs: Subscription[] = [];

  constructor(private repository: AccountRepository,
              private router: Router) {
  }

  ngOnInit() {
    this.subs.push(
      this.repository.findAll().subscribe(accs => this.accounts = accs)
    );
  }

  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
  }

  select(accountId: number) {
    const tree = this.router.parseUrl(this.router.url);
    let segments = tree.root.children['primary'].segments;
    if (accountId) {
      let path = accountId.toString();
      if (segments[1]) {
        segments[1].path = path;
      } else {
        segments[1] = {path: path, parameters: {}};
      }
    } else {
      tree.root.children['primary'].segments = segments.slice(0, 1);
    }
    this.router.navigateByUrl(tree);
  }

}
