import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-product',
  template: `
  
  <h3>{{product.brand | uppercase}} {{product.model | titlecase}}</h3>

  <b>{{product.price | currency}}</b>
  <div>
      InStock:
      <input type="checkbox" disabled="true" [checked]="product.inStock" />
  </div>
  <div class="text-muted"> {{product.lastUpdated | date:'MMM-dd-yyyy hh:mm'}}</div>

  `
})
export class ProductComponent {
  @Input()
  product: any;
}