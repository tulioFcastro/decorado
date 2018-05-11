import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { LayoutRoutingModule } from './layout/layout-routing.module';
import { loginRoute } from './entities';
import { mainRoute } from './layouts';

const routes: Routes = [
  loginRoute,
  ...mainRoute
];

@NgModule({
  imports: [
    // LayoutRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
