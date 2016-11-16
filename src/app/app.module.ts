import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {Lipsum} from './lipsum.service';
import {AccountContext} from './account/account-context.service';
import {FilterContext} from './account/organization/filter-context.service';
import {OrganizationContext} from './account/organization/organization-context.service';
import {AccountRepository} from './account/account-repository';
import {FilterRepository} from './account/organization/filter-repository.service';
import {OrganizationRepository} from './account/organization/organization-repository.service';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    Lipsum,
    AccountContext,
    AccountRepository,
    FilterContext,
    FilterRepository,
    OrganizationContext,
    OrganizationRepository
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
