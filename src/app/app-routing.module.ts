import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { mainRoute } from './main';
import { EntitiesRoutingModule } from './entities/entities-routing.module';

const routes: Routes = [
  ... mainRoute,
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [
    EntitiesRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
