import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app-routing.module";
import {Lipsum} from "./lipsum.service";
import {AccountContext} from './account/account-context.service';
import {FilterContext} from './account/organization/filter-context.service';
import {OrganizationContext} from './account/organization/organization-context.service';

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
    FilterContext,
    OrganizationContext
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
