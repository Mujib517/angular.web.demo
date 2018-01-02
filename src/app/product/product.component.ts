import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product',
  template: `
  
  <h3><a [routerLink]="'/products/'+product._id"> {{product.brand | uppercase}} {{product.model | titlecase}}</a></h3>

  <b>{{product.price | currency}}</b>
  <div>
      InStock:
      <input type="checkbox" disabled="true" [checked]="product.inStock" />
  </div>
  <div class="text-muted"> {{product.lastUpdated | date:'MMM-dd-yyyy hh:mm'}}</div>
  <div class="text-muted">{{product.lastUpdated | time }}</div>

  <button (click)="onDelete(product._id)" class="btn btn-sm btn-danger">Delete</button>
  `
})
export class ProductComponent {
  @Input()
  product: any;
  @Output()
  notify: EventEmitter<any>;

  constructor(private productSvc: ProductService) {
    this.notify = new EventEmitter<any>();
  }

  onDelete(id) {
    this.productSvc.delete(id)
      .subscribe(
      () => this.notify.emit({ message: "Message From child" }),
      err => console.log(err)
      )
  }
}