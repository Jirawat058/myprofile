import { AppComponent } from './app/app.component';

import { Profile } from './profile/profile';
import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Register } from './register/register';
import { Admin } from './admin/admin';



export const routes: Routes = [
  { path: '', component: Login },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'profile', component: Profile },
  { path: 'home', component: Profile },
  { path: 'about', component: Profile },
  { path: 'experience', component: Profile },
  { path: 'education', component: Profile },
  { path: 'skills', component: Profile },
  { path: 'activity', component: Profile },
  { path: 'contact', component: Profile },
  { path: 'register', component: Register },
  { path: 'admin', component: Admin },
  { path: '**', component: Login },

];

