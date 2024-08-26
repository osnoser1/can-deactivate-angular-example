import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [RouterLink],
  template: `
    <h1>Test Component</h1>
    <a routerLink="/">Go to homepage</a>
  `,
})
export class TestComponent {
}
