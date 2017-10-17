import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard.component';

const appRoutes: Routes = [
  {
    path: '/admin',
    component: AdminDashboardComponent,
  },
  {
    path: '/login',
    component: LoginComponent,
  },
];

export class AppRoutingModule {}
