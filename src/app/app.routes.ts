import { Routes } from '@angular/router';
import { authGuardFn } from '@auth0/auth0-angular';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TasksComponent } from './components/tasks/tasks.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [authGuardFn] },
  { path: 'apptask', component: TasksComponent, canActivate: [authGuardFn] },
];
