import { Route } from '@angular/router';

import { UsersComponent } from './users.component';
import {
  AuthGuard
} from '../../auth';

export const usersRoute: Route = {
  path: 'users',
  component: UsersComponent,
  data: {
    // authorities: ['CREATE_PUBLIC_CALL'],
    // pageTitle: 'global.menu.account.public-call',
    // pageRoute: 'global.menu.route.public-call-new'
  },
  canActivate: [AuthGuard],
  // loadChildren: 'app/entities/entities.module#EntitiesModule'
};
