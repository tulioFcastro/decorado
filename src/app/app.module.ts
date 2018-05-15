import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { InMemoryUserService } from './in-memory-user.service';
import { AppComponent } from './app.component';

import { MainComponent } from './main';

import {
  SideBarComponent,
  NavBarComponent
} from './layouts';

import {
  AuthService,
  GeneralService,
  EventEmitterService
} from './services';

import { AppRoutingModule } from './app-routing.module';

import { EntitiesModule } from './entities/entities.module';

import {
AuthGuard,
LoginGuard
} from './auth';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryUserService, {
      dataEncapsulation: false,
      delay: 300,
      passThruUnknownUrl: true
    }),
    SharedModule,
    EntitiesModule
  ],
  declarations: [
    AppComponent,
    MainComponent,
    SideBarComponent,
    NavBarComponent
  ],
  providers: [
    AuthGuard,
    LoginGuard,
    AuthService,
    GeneralService,
    EventEmitterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
