import {Injectable} from "@angular/core";
import {Organization} from "./organization";
import {Subject, BehaviorSubject, Observable} from "rxjs";

@Injectable()
export class OrganizationContext {

  private subject: Subject<Organization> = new BehaviorSubject(null);

  get organization$(): Observable<Organization> {
    return this.subject.asObservable();
  }

  observeData(data: {organization: Organization}) {
    this.subject.next(data.organization);
  }

}
