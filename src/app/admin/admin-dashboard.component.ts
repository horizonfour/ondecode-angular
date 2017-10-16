import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  template: `
    <p>Dashboard</p>

    <p>Session ID: {{ sessionId | async }}</p>
    <a id="anchor"></a>
    <p>Token: {{ token | async }}</p>

    Preloaded Modules
    <ul>
      <li *ngFor="let module of modules">{{ module }}</li>
    </ul>
  `,
})
export class AdminDashboardComponent {}
