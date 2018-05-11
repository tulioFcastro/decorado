import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { loginRoute } from './';

const routes: Routes = [
  loginRoute
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntitiesRoutingModule {
}
