import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Lipsum } from './shared/lipsum.service';
import { AccountContext } from './account/account-context.service';
import { FilterContext } from './account/organization/filter-context.service';
import { OrganizationContext } from './account/organization/organization-context.service';
import { AccountRepository } from './account/account-repository';
import { FilterRepository } from './account/organization/filter-repository.service';
import { OrganizationRepository } from './account/organization/organization-repository.service';
import { CurrencyContext } from './shared/currency-context.service';
import { CurrencyRepository } from './shared/currency-repository.service';
import { SharedModule } from './shared/shared-module';
import { RouterHelper } from './shared/router-helper.service';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    Lipsum,
    AccountContext,
    AccountRepository,
    CurrencyContext,
    CurrencyRepository,
    FilterContext,
    FilterRepository,
    OrganizationContext,
    OrganizationRepository,
    RouterHelper
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
