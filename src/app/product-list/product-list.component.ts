import { Component, OnInit, OnDestroy } from "@angular/core";
import { ProductService } from '../shared/product.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.html'
})
export class ProductListComponent implements OnInit, OnDestroy {
    products: any[];
    obs;
  
    constructor(private svc: ProductService){}

    ngOnInit() {
        this.init();
    }

    ngOnDestroy() {
        //cleanup logic
        this.obs.unsubscribe();
    }

 

    init() {
        this.obs = this.svc.get()
            .subscribe(
            data => this.products = data["products"],
            err => console.log(err)
            );
    }
}

// Pipes
// Container presentation
// Dependency Injection
// GET: products
// Moment
// Custom Pipe
// Post