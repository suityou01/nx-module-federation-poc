import { Route } from '@angular/router';
import { LoginComponent } from './components/login.component';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('./remote-entry/entry.routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'login',
    compoent:
  }
];
