import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  loginRoute, notFoundRoute,
  usersRoute
} from './';

const routes: Routes = [
  loginRoute,
  usersRoute,
  notFoundRoute
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntitiesRoutingModule {
}
