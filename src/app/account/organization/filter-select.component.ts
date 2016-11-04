import {Component, Input, OnInit, OnDestroy} from "@angular/core";
import {Filter} from "./filter";
import {Subscription} from "rxjs";
import {FilterRepository} from "./filter-repository.service";
import {Router} from "@angular/router";
import {Organization} from "./organization";
import {Account} from "../account";
import {FILTER_ID} from "./index";

@Component({
  selector: 'app-filter-select',
  templateUrl: './filter-select.component.html'
})
export class FilterSelectComponent implements OnInit, OnDestroy {

  @Input()
  account: Account;

  @Input()
  organization: Organization;

  @Input()
  current: Filter;

  filters: Filter[];
  private filtersSub: Subscription;

  constructor(private repository: FilterRepository,
              private router: Router) {
  }

  ngOnInit() {
    this.filtersSub = this.repository.findAll(this.account, this.organization)
      .subscribe(filters => this.filters = filters);
  }

  ngOnDestroy() {
    this.filtersSub.unsubscribe();
  }

  select(filterId: number) {
    const tree = this.router.parseUrl(this.router.url);
    tree.root.children['primary'].segments[3].parameters[FILTER_ID] = filterId.toString();
    this.router.navigateByUrl(tree);
  }

}
