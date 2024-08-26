import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a routerLink="/test">Go to test</a>
  `,
})
export class HomeComponent {
  name = 'Angular';
}
