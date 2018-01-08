import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <h1>Contact Page</h1>
  `,
  styles: []
})
export class ContactComponent implements OnInit {

  count: number = 10;
  counter: number;

  constructor() { }

  ngOnInit() {

    if (this.count == 11) {
      this.count = 100;
    }
    else {
      this.count++;
    }

  }

}
