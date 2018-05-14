import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntitiesRoutingModule } from './entities-routing.module';
import {
  LoginComponent,
  UsersComponent
} from './';
import { AppMaterialModules } from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    EntitiesRoutingModule,
    AppMaterialModules
  ],
  declarations: [
    LoginComponent,
    UsersComponent
  ]
})
export class EntitiesModule {
}
