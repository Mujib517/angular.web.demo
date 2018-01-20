import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../shared/models/product.model';

@Component({
  selector: 'app-product-detail',
  template: `
  

  <div *ngIf="err" class="alert alert-danger">Failed to load data</div>
  <mat-spinner *ngIf="loading"></mat-spinner>
  <div *ngIf="!loading">
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

      <ul class="nav nav-tabs">
        <li routerLinkActive="active"><a routerLink="specs">More Specs</a><li>
        <li routerLinkActive="active"><a routerLink="reviews">Reviews</a><li>
      </ul>

      <router-outlet></router-outlet>
</div>


  `,
  styles: []
})
export class ProductDetailComponent implements OnInit {

  loading: boolean = false;
  product: Product;
  err: boolean;

  constructor(private productSvc: ProductService, private activatedRoute: ActivatedRoute) {
    this.product = new Product();
  }

  ngOnInit() {
    this.loading = true;
    let id = this.activatedRoute.snapshot.params.id;

    this.productSvc.getById(id)
      .subscribe(
      res => {
        this.product = <Product>res;
        this.productSvc.reviews = res["reviews"];
        this.loading = false;
      },
      err => this.err = true
      )
  }

}
