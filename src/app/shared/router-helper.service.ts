import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class RouterHelper {

  constructor(private router: Router) {
  }

  selectRequired(value: any, depth: number) {
    const tree = this.router.parseUrl(this.router.url);
    let segments = tree.root.children['primary'].segments;
    if (value) {
      let path = value.toString();
      if (segments[depth]) {
        segments[depth].path = path;
      } else {
        segments[depth] = { path: path, parameters: {} };
      }
    } else {
      tree.root.children['primary'].segments = segments.slice(0, depth);
    }
    this.router.navigateByUrl(tree);
  }

  selectOptional(value: any, depth: number, paramName: string) {
    const tree = this.router.parseUrl(this.router.url);
    if (value) {
      tree.root.children['primary'].segments[depth].parameters[paramName] = value.toString();
    } else {
      delete tree.root.children['primary'].segments[depth].parameters[paramName];
    }
    this.router.navigateByUrl(tree);
  }

}
