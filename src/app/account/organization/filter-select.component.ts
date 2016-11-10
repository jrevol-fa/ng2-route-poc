import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import {Filter} from './filter';
import {Subscription, Observable} from 'rxjs';
import {FilterRepository} from './filter-repository.service';
import {Router} from '@angular/router';
import {Organization} from './organization';
import {Account} from '../account';
import {FILTER_ID} from './index';

@Component({
  selector: 'app-filter-select',
  templateUrl: './filter-select.component.html'
})
export class FilterSelectComponent implements OnInit, OnDestroy {

  @Input()
  accountAndOrganization: Observable<{account: Account, organization: Organization}>;

  @Input()
  current: Filter;

  filters: Filter[];
  private subs: Subscription[] = [];

  constructor(private repository: FilterRepository,
              private router: Router) {
  }

  ngOnInit() {
    this.subs.push(
      this.accountAndOrganization
        .flatMap((data: {account: Account, organization: Organization}) => this.repository.findAll(data.account, data.organization))
        .subscribe(filters => this.filters = filters)
    );
  }

  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
  }

  select(filterId: number) {
    const tree = this.router.parseUrl(this.router.url);
    if (filterId) {
      tree.root.children['primary'].segments[3].parameters[FILTER_ID] = filterId.toString();
    } else {
      delete tree.root.children['primary'].segments[3].parameters[FILTER_ID];
    }
    this.router.navigateByUrl(tree);
  }

}
