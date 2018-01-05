import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  template: `
    <h1>About Page</h1>

    <h1>{{count}}</h1>

    <button (click)="onClick()">++</button>

  `,
  styles: []
})
export class AboutComponent implements OnInit {
  count: number = 0;

  //asynchronous operation
  // web svc, events, setTimeout, setInterval

  constructor(private http: HttpClient) { }

  onClick() {
    this.count++;
  }

  ngOnInit() {
    this.http.get("https://express-api.herokuapp.com/api/products")
      .subscribe(
      (res) => this.count = 100
      )
  }

}
