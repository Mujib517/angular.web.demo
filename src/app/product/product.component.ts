import { Component, Input } from '@angular/core';
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

  constructor(private productSvc: ProductService) { }

  onDelete(id) {
    this.productSvc.delete(id)
      .subscribe(
      () => console.log("Deleted!!"),
      err => console.log(err)
      )
  }
}