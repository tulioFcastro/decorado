import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntitiesRoutingModule } from './entities-routing.module';
import { AppMaterialModules } from '../material.module';

import {
  LoginComponent,
  UsersComponent,
  NotFoundComponent
} from './';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    EntitiesRoutingModule,
    SharedModule
  ],
  declarations: [
    LoginComponent,
    UsersComponent,
    NotFoundComponent
  ]
})
export class EntitiesModule {
}
