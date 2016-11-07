import {Component, OnInit, OnDestroy} from "@angular/core";
import {Organization} from "./organization";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {OrganizationRepository} from "./organization-repository.service";
import {Account} from "../account";

@Component({
  templateUrl: './organization.component.html'
})
export class OrganizationComponent implements OnInit, OnDestroy {

  account: Account;

  organization: Organization;

  choices: Organization[];

  private subs: Subscription[] = [];

  constructor(private route: ActivatedRoute,
              private repository: OrganizationRepository) {
  }

  ngOnInit() {
    this.account = this.route.snapshot.data['account'] as Account;
    this.subs.push(
      this.route.data.subscribe((data: {organization: Organization}) => this.organization = data.organization),
      this.repository.findAll(this.account).subscribe(choices => this.choices = choices)
    );
  }

  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
  }
}
