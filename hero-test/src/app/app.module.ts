import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';


import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';

import {HeroesModule} from './heroes/heroes.module';
import {LoginModule} from './login/login.module';
import {AppRoutingModule} from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import {HeroService} from './heroes/hero.service';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import {AuthService} from './auth.service';
import {DialogService} from './dialog.service';
import {AuthGuard} from './auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ComposeMessageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    HeroesModule,
    LoginModule,
    AppRoutingModule,
  ],
  providers: [HeroService, AuthService, DialogService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
