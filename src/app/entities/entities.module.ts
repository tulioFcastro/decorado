import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntitiesRoutingModule } from './entities-routing.module';
import {
  LoginComponent,
  UsersComponent
} from './';

@NgModule({
  imports: [
    CommonModule,
    EntitiesRoutingModule
  ],
  declarations: [
    LoginComponent,
    UsersComponent
  ]
})
export class EntitiesModule {
}
