import { Component, OnInit, OnDestroy } from "@angular/core";
import { ProductService } from '../shared/product.service';
@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.html'
})
export class ProductListComponent implements OnInit, OnDestroy {
    products: any[];
    obs;
    product = {};
    //dependency injection
    constructor(private svc: ProductService) { }

    ngOnInit() {
        this.init();
    }

    ngOnDestroy() {
        //cleanup logic
        this.obs.unsubscribe();
    }

    onSave() {
        this.svc.save(this.product)
            .subscribe(
            res => console.log("successfully added"),
            err => this.init()
            )
    }

    init() {
        this.obs = this.svc.get()
            .subscribe(
            data => this.products = data["products"],
            err => console.log(err)
            );
        this.product = {};
    }
}

// Pipes
// Container presentation
// Dependency Injection
// GET: products
// Moment
// Custom Pipe
// Post