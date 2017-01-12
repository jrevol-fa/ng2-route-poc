import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CombineLatestComponent } from './combine-latest/combine-latest.component';

const routes: Routes = [
    {
        path: 'account',
        loadChildren: 'app/account/account.module#AccountModule'
    },
    {
        path: 'combineLatest',
        component: CombineLatestComponent
    },
    {
        path: '',
        redirectTo: '/account',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {
}
