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
    product = {};
    frm: FormGroup;
    //dependency injection
    constructor(private svc: ProductService, private fb: FormBuilder) {
        this.frm = fb.group({
            brand: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
            model: [''],
            price: [''],
            inStock: [true]
        });
    }

    ngOnInit() {
        this.init();
    }

    ngOnDestroy() {
        //cleanup logic
        this.obs.unsubscribe();
    }

    onSave() {
        if (this.frm.valid) {
            this.svc.save(this.product)
                .subscribe(
                res => console.log("successfully added"),
                err => this.init()
                )
        }
        else {
            console.log(this.frm.controls);
            console.log("Validations failed");
        }

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