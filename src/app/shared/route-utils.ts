import { ActivatedRouteSnapshot } from '@angular/router';

export class RouteUtils {
    static extractData(route: ActivatedRouteSnapshot, key: string): any | undefined {
        let current = route;
        while (current) {
            if (current.data[ key ]) {
                return current.data[ key ];
            }
            current = current.parent;
        }
        return undefined;
    }
}
