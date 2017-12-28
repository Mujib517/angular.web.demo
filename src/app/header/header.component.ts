import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <div class="container">
  <div class="navbar navbar-inverse">
      <div class="navbar-brand">My Products App</div>
      <ul class="navbar-nav nav">
          <li>
              <a routerLink="/">Home</a>
          </li>
          <li>
              <a routerLink="/about">About</a>
          </li>
          <li>
              <a routerLink="/products">Products</a>
          </li>
          <li>
              <a routerLink="/contact">Contact</a>
          </li>
      </ul>
  </div>
</div>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
