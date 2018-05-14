import { Routes } from '@angular/router';

import { MainComponent } from './main.component';
import { AuthGuard } from '../auth';

export const mainRoute: Routes = [
  {
    path: '',
    component: MainComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
    loadChildren: 'app/entities/entities.module#EntitiesModule'
  }
];
