import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntitiesRoutingModule } from './entities-routing.module';
import { AppMaterialModules } from '../material.module';

import {
  LoginComponent,
  UsersComponent,
  NotFoundComponent
} from './';

@NgModule({
  imports: [
    CommonModule,
    EntitiesRoutingModule,
    AppMaterialModules
  ],
  declarations: [
    LoginComponent,
    UsersComponent,
    NotFoundComponent
  ]
})
export class EntitiesModule {
}
