webpackJsonp([1,6],{968:function(t,e,n){"use strict";var o=n(1),r=n(984),i=n(978),a=n(977),c=n(972),f=n(975),u=n(974),s=n(976),l=n(985),p=n(982);n.d(e,"OrganizationModule",function(){return h});var d=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},y=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},h=function(){function t(){}return t=d([n.i(o.u)({imports:[r.a,f.a],declarations:[p.a,i.a,l.a],providers:[u.a,s.a,c.a,a.a],exports:[p.a]}),y("design:paramtypes",[])],t)}()},971:function(t,e,n){"use strict";n.d(e,"a",function(){return o}),n.d(e,"b",function(){return r});var o="organizationId",r="filterId"},972:function(t,e,n){"use strict";var o=n(1),r=n(170);n.n(r);n.d(e,"a",function(){return c});var i=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(){this.organizations=[{id:123,name:"My Castle"},{id:456,name:"My Palace"}]}return t.prototype.findAll=function(t){return console.log("Find all organizations for account: "+JSON.stringify(t)),r.Observable.of(this.organizations).delay(100)},t.prototype.findOne=function(t,e){return console.log("Find one organization for account: "+JSON.stringify(t)+" and id: "+e),r.Observable.of(this.organizations).delay(100).map(function(t){return t.find(function(t){return t.id===e})})},t=i([n.i(o.c)(),a("design:paramtypes",[])],t)}()},973:function(t,e,n){"use strict";n.d(e,"b",function(){return o}),n.d(e,"a",function(){return r});var o="accountId",r="account"},974:function(t,e,n){"use strict";var o=n(1),r=n(170);n.n(r);n.d(e,"a",function(){return c});var i=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(){this.filters=[{id:123,name:"My loans"},{id:456,name:"My derivatives"}]}return t.prototype.findAll=function(t,e){return console.log("Find all filters for account: "+JSON.stringify(t)+" and organization: "+JSON.stringify(e)),r.Observable.of(this.filters).delay(100)},t.prototype.findOne=function(t,e,n){return console.log("Find one filter for account: "+JSON.stringify(t)+", organization: "+JSON.stringify(e)+" and id: "+n),r.Observable.of(this.filters).delay(100).map(function(t){return t.find(function(t){return t.id===n})})},t=i([n.i(o.c)(),a("design:paramtypes",[])],t)}()},975:function(t,e,n){"use strict";var o=n(1),r=n(118),i=n(979);n.d(e,"a",function(){return f});var a=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},c=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},f=function(){function t(){}return t=a([n.i(o.u)({imports:[r.g],declarations:[i.a],exports:[r.g,i.a]}),c("design:paramtypes",[])],t)}()},976:function(t,e,n){"use strict";var o=n(974),r=n(972),i=n(971),a=n(1),c=n(980),f=n(973);n.d(e,"a",function(){return l});var u=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},l=function(){function t(t,e){this.repository=t,this.organizationRepository=e}return t.prototype.resolve=function(t,e){var n=this,o=c.a.extractData(t,f.a),r=+t.params[i.a],a=+t.params[i.b];return this.organizationRepository.findOne(o,r).flatMap(function(t){return n.repository.findOne(o,t,a)}).map(function(t){return console.log("Resolved filter: "+JSON.stringify(t)),t})},t=u([n.i(a.c)(),s("design:paramtypes",["function"==typeof(e="undefined"!=typeof o.a&&o.a)&&e||Object,"function"==typeof(l="undefined"!=typeof r.a&&r.a)&&l||Object])],t);var e,l}()},977:function(t,e,n){"use strict";var o=n(1),r=n(972),i=n(971),a=n(980),c=n(973);n.d(e,"a",function(){return s});var f=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},u=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(t){this.repository=t}return t.prototype.resolve=function(t,e){var n=a.a.extractData(t,c.a),o=+t.params[i.a];return this.repository.findOne(n,o).map(function(t){return console.log("Resolved organization: "+JSON.stringify(t)),t})},t=f([n.i(o.c)(),u("design:paramtypes",["function"==typeof(e="undefined"!=typeof r.a&&r.a)&&e||Object])],t);var e}()},978:function(t,e,n){"use strict";var o=n(1),r=n(420),i=n(423),a=n(421),c=n(422);n.d(e,"a",function(){return s});var f=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},u=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(t,e,n,o){this.route=t,this.accountCtx=e,this.organizationCtx=n,this.filterCtx=o,this.subs=[]}return t.prototype.ngOnInit=function(){var t=this;this.subs.push(this.route.data.subscribe(function(e){return t.organizationCtx.observeData(e)}),this.route.data.subscribe(function(e){return t.filterCtx.observeData(e)}),this.organizationCtx.data$.subscribe(function(e){return t.organization=e}))},t.prototype.ngOnDestroy=function(){this.subs.forEach(function(t){return t.unsubscribe()})},Object.defineProperty(t.prototype,"account$",{get:function(){return this.accountCtx.data$},enumerable:!0,configurable:!0}),t=f([n.i(o.J)({template:n(989)}),u("design:paramtypes",["function"==typeof(e="undefined"!=typeof r.a&&r.a)&&e||Object,"function"==typeof(s="undefined"!=typeof a.a&&a.a)&&s||Object,"function"==typeof(l="undefined"!=typeof i.a&&i.a)&&l||Object,"function"==typeof(p="undefined"!=typeof c.a&&c.a)&&p||Object])],t);var e,s,l,p}()},979:function(t,e,n){"use strict";var o=n(1),r=n(424);n.d(e,"a",function(){return c});var i=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t){this.lipsum=t}return t=i([n.i(o.J)({selector:"app-lipsum",template:"{{lipsum.text}}"}),a("design:paramtypes",["function"==typeof(e="undefined"!=typeof r.a&&r.a)&&e||Object])],t);var e}()},980:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var o=function(){function t(){}return t.extractData=function(t,e){for(var n=t;n;){if(n.data[e])return n.data[e];n=n.parent}},t}()},982:function(t,e,n){"use strict";var o=n(1),r=n(983),i=n(170),a=(n.n(i),n(974)),c=n(420),f=n(971);n.d(e,"a",function(){return l});var u=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},l=function(){function t(t,e){this.repository=t,this.router=e,this.subs=[]}return t.prototype.ngOnInit=function(){var t=this;this.subs.push(this.accountAndOrganization.flatMap(function(e){return t.repository.findAll(e.account,e.organization)}).subscribe(function(e){return t.filters=e}))},t.prototype.ngOnDestroy=function(){this.subs.forEach(function(t){return t.unsubscribe()})},t.prototype.select=function(t){var e=this.router.parseUrl(this.router.url);e.root.children.primary.segments[3].parameters[f.b]=t.toString(),this.router.navigateByUrl(e)},u([n.i(o.l)(),s("design:type","function"==typeof(e="undefined"!=typeof i.Observable&&i.Observable)&&e||Object)],t.prototype,"accountAndOrganization",void 0),u([n.i(o.l)(),s("design:type","function"==typeof(l="undefined"!=typeof r.a&&r.a)&&l||Object)],t.prototype,"current",void 0),t=u([n.i(o.J)({selector:"app-filter-select",template:n(987)}),s("design:paramtypes",["function"==typeof(p="undefined"!=typeof a.a&&a.a)&&p||Object,"function"==typeof(d="undefined"!=typeof c.c&&c.c)&&d||Object])],t);var e,l,p,d}()},983:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var o=function(){function t(){}return t}()},984:function(t,e,n){"use strict";var o=n(1),r=n(420),i=n(978),a=n(977),c=n(971),f=n(976);n.d(e,"a",function(){return p});var u=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},l=[{path:":"+c.a,component:i.a,resolve:{filter:f.a,organization:a.a},children:[{path:"portfolio",loadChildren:"app/account/organization/portfolio/portfolio.module#PortfolioModule"}]}],p=function(){function t(){}return t=u([n.i(o.u)({imports:[r.b.forChild(l)],exports:[r.b]}),s("design:paramtypes",[])],t)}()},985:function(t,e,n){"use strict";var o=n(1),r=n(986),i=n(170),a=(n.n(i),n(972)),c=n(420);n.d(e,"a",function(){return s});var f=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},u=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(t,e){this.repository=t,this.router=e,this.subs=[]}return t.prototype.ngOnInit=function(){var t=this;this.subs.push(this.account.flatMap(function(e){return t.repository.findAll(e)}).subscribe(function(e){return t.organizations=e}))},t.prototype.ngOnDestroy=function(){this.subs.forEach(function(t){return t.unsubscribe()})},t.prototype.select=function(t){var e=this.router.parseUrl(this.router.url);e.root.children.primary.segments[3].path=t.toString(),this.router.navigateByUrl(e)},f([n.i(o.l)(),u("design:type","function"==typeof(e="undefined"!=typeof i.Observable&&i.Observable)&&e||Object)],t.prototype,"account",void 0),f([n.i(o.l)(),u("design:type","function"==typeof(s="undefined"!=typeof r.a&&r.a)&&s||Object)],t.prototype,"current",void 0),t=f([n.i(o.J)({selector:"app-organization-select",template:n(988)}),u("design:paramtypes",["function"==typeof(l="undefined"!=typeof a.a&&a.a)&&l||Object,"function"==typeof(p="undefined"!=typeof c.c&&c.c)&&p||Object])],t);var e,s,l,p}()},986:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var o=function(){function t(){}return t}()},987:function(t,e){t.exports='<select class="pull-right" (change)="select($event.target.value)">\n  <option></option>\n  <option *ngFor="let filter of filters"\n          [selected]="filter?.id === current?.id"\n          value="{{filter.id}}">\n    {{filter.name}}\n  </option>\n</select>\n'},988:function(t,e){t.exports='<select class="pull-right" (change)="select($event.target.value)">\n  <option></option>\n  <option *ngFor="let organization of organizations"\n          [selected]="organization?.id === current?.id"\n          value="{{organization.id}}">\n    {{organization.name}}\n  </option>\n</select>\n'},989:function(t,e){t.exports='<div class="panel panel-default">\n  <div class="panel-heading">\n    <div class="row">\n\n      <div class="col-sm-8">\n        <h3 class="panel-title" i18n>Organization: {{organization?.name}}</h3>\n      </div>\n\n      <div class="col-sm-4">\n        <app-organization-select [account]="account$" [current]="organization"></app-organization-select>\n      </div>\n\n    </div>\n  </div>\n  <div class="panel-body">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n'}});
//# sourceMappingURL=1.0e6a2352ad32841ef776.bundle.map