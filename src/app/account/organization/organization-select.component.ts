import {OnInit, OnDestroy, Component, Input} from '@angular/core';
import {Organization} from './organization';
import {Subscription, Observable} from 'rxjs';
import {OrganizationRepository} from './organization-repository.service';
import {Account} from '../account';
import {Router} from '@angular/router';

@Component({
  selector: 'app-organization-select',
  templateUrl: './organization-select.component.html'
})
export class OrganizationSelectComponent implements OnInit, OnDestroy {

  @Input()
  account: Observable<Account>;

  @Input()
  current: Organization;

  organizations: Organization[];

  private subs: Subscription[] = [];

  constructor(private repository: OrganizationRepository,
              private router: Router) {
  }

  ngOnInit(): void {
    this.subs.push(
      this.account.flatMap(acc => this.repository.findAll(acc))
        .subscribe(orgs => this.organizations = orgs)
    );
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
  }

  select(organizationId: number) {
    const tree = this.router.parseUrl(this.router.url);
    let segments = tree.root.children['primary'].segments;
    if (organizationId) {
      let path = organizationId.toString();
      if (segments[3]) {
        segments[3].path = path;
      } else {
        segments[3] = {path: path, parameters: {}};
      }
    } else {
      tree.root.children['primary'].segments = segments.slice(0, 3);
    }
    this.router.navigateByUrl(tree);
  }

}
