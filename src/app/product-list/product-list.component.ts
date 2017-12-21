import { Component } from "@angular/core";
import { ProductService } from '../shared/product.service';
@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.html'
})
export class ProductListComponent {
    products: any[];
    //dependency injection
    constructor(svc:ProductService) {
        this.products = svc.get();
    }
}
