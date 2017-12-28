import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  template: `
  <div *ngIf="err" class="alert alert-danger">Failed to load data</div>
   <h1>Product Detail</h1>
  <div class="col-md-5">
   <div class="panel panel-primary">
    <div class="panel-heading">
      {{product.brand}} {{product.model}}
    </div>
    <div class="panel-body">
      <div>{{product.price | currency}}</div>
      <div>InStock <input type="checkbox" [checked]="product.inStock"/></div>
    </div>
    <div class="panel-footer">
      {{product.lastUpdated | time}}
    </div>
   </div>
   </div>

  `,
  styles: []
})
export class ProductDetailComponent implements OnInit {

  product: any={};
  err: boolean;

  constructor(private productSvc: ProductService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    let id = this.activatedRoute.snapshot.params.id;

    this.productSvc.getById(id)
      .subscribe(
      res => this.product = res,
      err => this.err = true
      )
  }

}
