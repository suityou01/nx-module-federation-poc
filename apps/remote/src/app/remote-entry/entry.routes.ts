import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';
import { LoginComponent } from '../components/login.component';

export const remoteRoutes: Route[] = [
  { path: 'login', component: LoginComponent },
  //{ path: '', component: RemoteEntryComponent },
];
