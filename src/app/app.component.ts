import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <h1>ng-demo</h1>
      <p>This project provides some examples of coding  in Angular.
          Specifically, it deals with:</p>
      <ul>
          <li><a routerLink="/binding">Bootstrap and ng-bootstrap</a></li>
          <li><a routerLink="/binding">Displaying Code in Angular</a></li>
          <li><a routerLink="/binding">Binding</a></li>
          <li><a routerLink="/this">this</a></li>
          <li><a routerLink="/observables">Observables</a></li>
      </ul>
      <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'ng-demo';
}
