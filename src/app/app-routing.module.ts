import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login.component';

const appRoutes: Routes = [
  {
    path: '/admin',
    component: LoginComponent,
  },
  {
    path: '/login',
    component: LoginComponent,
  },
];

export class AppRoutingModule {}
