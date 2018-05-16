import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntitiesRoutingModule } from './entities-routing.module';

import {
  LoginComponent,
  UsersComponent,
  NotFoundComponent,
  NewUserComponent,
  DeleteUserComponent,
  EditUserComponent,
  SearchUserComponent
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
    NotFoundComponent,
    NewUserComponent,
    DeleteUserComponent,
    EditUserComponent,
    SearchUserComponent
  ]
})
export class EntitiesModule {
}
