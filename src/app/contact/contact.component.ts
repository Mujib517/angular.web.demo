import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <h1>Contact Page</h1>

    <div infiniteScroll infiniteScrollDistance="2" (scrolled)="addMore()">
        <div   class="well" *ngFor="let val of vals">
          <h3>{{val}}</h3>
        </div>
    </div>

  `,
  styles: []
})
export class ContactComponent implements OnInit {

  count: number = 10;
  counter: number;
  vals: number[] = [1, 2, 3, 4, 5];

  constructor() { }

  ngOnInit() {

    if (this.count == 11) {
      this.count = 100;
    }
    else {
      this.count++;
    }
  }

  addMore() {
    for (var i = 0; i < 5; i++) {
      this.vals.push(Math.ceil(Math.random()) * 10);
    }
  }

}
