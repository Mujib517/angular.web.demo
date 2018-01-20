import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  template: `
    <h1>About Page</h1>

    <mat-toolbar color="warn">
      <button mat-button>Home</button>
      <button mat-button>About</button>
      <button mat-button>Contact</button>
    </mat-toolbar>

    <div>
        <button mat-button color="accent">Click me</button>
        <button mat-raised-button color="warn">Click me</button>
        <button mat-fab>
          <i class="fa fa-plus"></i>
        </button>
        <button mat-mini-fab color="primary">
          <i class="fa fa-facebook"></i>
        </button>
    </div>
    <div>
      <mat-checkbox></mat-checkbox>
    </div>
    <div>
      <mat-form-field>
        <input type="text" matInput placeholder="enter ur name"/>
      </mat-form-field>
      <mat-select placeholder="Select value">
	      <mat-option value="1">Hello</mat-option>
	      <mat-option value="2">Hi</mat-option>
      </mat-select>
      <mat-radio-group>
        <mat-radio-button value="1">Option 1</mat-radio-button>
        <mat-radio-button value="2">Option 2</mat-radio-button>
    </mat-radio-group>
    <mat-slide-toggle>On</mat-slide-toggle>
  <mat-spinner></mat-spinner>
    </div>
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
