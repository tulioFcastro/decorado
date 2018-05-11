import { Route } from '@angular/router';

import { LoginComponent } from './login.component';
import { LoginGuard } from '../../auth';

export const loginRoute: Route = {
  path: 'login',
  component: LoginComponent,
  data: {
    // authorities: ['CREATE_PUBLIC_CALL'],
    // pageTitle: 'global.menu.account.public-call',
    // pageRoute: 'global.menu.route.public-call-new'
  },
  canActivate: [LoginGuard],
  // loadChildren: 'app/entities/entities.module#EntitiesModule'
};
