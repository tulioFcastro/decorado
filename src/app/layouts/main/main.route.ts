import { Routes } from '@angular/router';

import { MainComponent } from './main.component';
import { AuthGuard } from '../../auth';
// import { exampleRoute, exampleDetailsRoute } from '../../entities';

export const mainRoute: Routes = [
  {
    path: '',
    component: MainComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
    children: [
      // exampleRoute,
      // exampleDetailsRoute
    ]
  },
  {
    path: '**',
    redirectTo: '/login'
  }
];
