import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatTableModule,
  MatPaginatorModule,
  MatTabsModule,
  MatIconModule,
  MatCardModule
} from '@angular/material';

import { AppComponent } from './app.component';
import {
  MainComponent,
  SideBarComponent,
  NavBarComponent
} from './layouts';
import {
  GeneralService,
  UserService
} from './services';
import { AppRoutingModule } from './app-routing.module';
import { EntitiesModule } from './entities/entities.module';
import {
  AuthGuard,
  LoginGuard
} from './auth';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SideBarComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatTabsModule,
    MatIconModule,
    MatCardModule,
    AppRoutingModule,
    EntitiesModule
  ],
  providers: [
    AuthGuard,
    LoginGuard,
    UserService,
    GeneralService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
