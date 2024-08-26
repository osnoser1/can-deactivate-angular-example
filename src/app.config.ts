import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes, withDebugTracing } from '@angular/router';
import { TestComponent } from './test.component';
import { canDeactivate } from './can-deactivate.guard';
import { HomeComponent } from './home.component';

const router: Routes = [
  { path: '', component: HomeComponent },
  { path: 'test', component: TestComponent, canDeactivate: [canDeactivate] },
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(router, withDebugTracing())],
};
