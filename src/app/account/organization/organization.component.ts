import {Component, OnInit, OnDestroy} from "@angular/core";
import {Organization} from "./organization";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {OrganizationRepository} from "./organization-repository.service";
import {Account} from "../account";
import {OrganizationContext} from "./organization-context.service";

@Component({
  templateUrl: './organization.component.html'
})
export class OrganizationComponent implements OnInit, OnDestroy {

  account: Account;

  organization: Organization;

  choices: Organization[];

  private subs: Subscription[] = [];

  constructor(private route: ActivatedRoute,
              private context: OrganizationContext,
              private repository: OrganizationRepository) {
  }

  ngOnInit() {
    this.account = this.route.snapshot.data['account'] as Account;
    this.subs.push(
      this.route.data.subscribe((data: {organization: Organization}) => this.context.observeData(data)),
      this.context.organization$.subscribe(organization => this.organization = organization),
      this.repository.findAll(this.account).subscribe(choices => this.choices = choices)
    );
  }

  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
  }
}
