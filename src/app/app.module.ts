import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';

import { MainComponent } from './main';

import {
  SideBarComponent,
  NavBarComponent
} from './layouts';

import {
  AuthService,
  GeneralService
} from './services';

import { AppRoutingModule } from './app-routing.module';

import { EntitiesModule } from './entities/entities.module';

import {
AuthGuard,
LoginGuard
} from './auth';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    EntitiesModule,
    FormsModule,
    ReactiveFormsModule
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
    GeneralService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
