import { Component, OnInit, OnDestroy } from "@angular/core";
import { ProductService } from '../shared/product.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from "@angular/router";
import { Product } from "../shared/models/product.model";

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.html'
})
export class ProductListComponent implements OnInit, OnDestroy {
    products: Product[];
    obs;

    constructor(private svc: ProductService, private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        //this.init();
        this.products = this.activatedRoute.snapshot.data.response;

        /*
            Message
            {
                sender:mobile,
                reciever:mobile,
                sendDate:Date,
                recievedDate:Date,
                read:boolean,
                readDate:Date,
                type:text|image|video|file
            }
        */
    }

    ngOnDestroy() {
        //cleanup logic
        // this.obs.unsubscribe();
    }

    //child component will call this function
    onNotify(obj) {
        console.log(obj);
        this.init();
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