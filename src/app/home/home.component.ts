import { Component } from "@angular/core";

//ES6 Module
@Component({
    selector: 'app-home',
    template: ` 
    
    <table border="1">
        <tr>
            <td>Id</td>
            <td>Brand</td>
            <td>Model</td>
            <td>Price</td>
            <td>InStock</td>
        </tr>
        <tr *ngFor="let product of products">
            <td>{{product.id}}</td>
            <td>{{product.brand}}</td>
            <td>{{product.model}}</td>
            <td>{{product.price}}</td>
            <td>
                <input type="checkbox" disabled="true" [checked]="product.inStock"/>
            </td>
        </tr>
    </table>


    `
})
export class HomeComponent {

    products = [{ id: 1, brand: "Apple", model: "Iphone 5S", price: 200, inStock: false },
    { id: 2, brand: "Apple", model: "Iphone 7S", price: 700, inStock: true },
    { id: 3, brand: "Samsung", model: "Galaxy S8", price: 1200, inStock: true },
    { id: 4, brand: "Samsung", model: "Galaxy S7", price: 800, inStock: true }];
}