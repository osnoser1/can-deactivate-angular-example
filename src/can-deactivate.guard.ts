import { CanDeactivateFn } from '@angular/router';
import { TestComponent } from './test.component';

export const canDeactivate: CanDeactivateFn<TestComponent> = () => {
  return window.confirm('Are you sure you want to exit?');
};
