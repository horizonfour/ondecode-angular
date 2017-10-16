import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

import { HTTP_INTERCEPTORS } from '@angular/common/http';

const appRoutes: Routes = [{ path: 'admin', component: LoginComponent }];

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [
    BrowserModule,
    LoginRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }, // <-- debugging purposes only
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
