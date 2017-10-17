import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard.component';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { httpFactory } from './auth/http.factory';

import { HTTP_INTERCEPTORS } from '@angular/common/http';

const appRoutes: Routes = [
  { path: 'admin', component: AdminDashboardComponent },
];

@NgModule({
  declarations: [AppComponent, LoginComponent, AdminDashboardComponent],
  imports: [
    BrowserModule,
    LoginRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }, // <-- debugging purposes only
    ),
    HttpModule,
  ],
  providers: [
    {
      provide: Http,
      useFactory: httpFactory,
      deps: [XHRBackend, RequestOptions],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
