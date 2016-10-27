import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'account',
        loadChildren: 'app/account/account.module#AccountModule'
    },
    {
        path: '',
        redirectTo: '/account/123/organization/123/portfolio',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {
}