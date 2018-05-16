import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntitiesRoutingModule } from './entities/entities-routing.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [
    EntitiesRoutingModule,
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
