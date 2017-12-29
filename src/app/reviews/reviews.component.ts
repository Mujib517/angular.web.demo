import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-reviews',
  template: `
    
  <h1 *ngIf="reviews && reviews.length>0">Reviews</h1>
  <h3 *ngIf="reviews && reviews.length==0">Be the first one to review</h3>

    <div class="col-md-6" *ngFor="let review of reviews">
      <h4>{{review.subject}} {{review.rating}}</h4>
      <p>{{review.review}}</p>
      <div class="text-muted">{{review.lastUpdated|time}}</div>
      <hr/>
    </div>
  `,
  styles: []
})
export class ReviewsComponent implements OnInit {

  reviews: any[];

  constructor(private productSvc: ProductService) { }

  ngOnInit() {
    this.reviews = this.productSvc.reviews;
  }

}
