import {Injectable} from "@angular/core";
import {BehaviorSubject, Subject, Observable} from "rxjs";
import {Filter} from "./filter";

@Injectable()
export class FilterContext {

  private subject: Subject<Filter> = new BehaviorSubject<Filter>(null);

  get filter$(): Observable<Filter> {
    return this.subject.asObservable();
  }

  observeData(data: {filter: Filter}) {
    this.subject.next(data.filter);
  }

}
