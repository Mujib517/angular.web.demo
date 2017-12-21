import { Injectable } from "@angular/core";


@Injectable()
export class ProductService{
  get(){
        return [{ id: 1, brand: "Apple", model: "Iphone 5S", price: 200, inStock: false, lastUpdated: Date.now() },
        { id: 2, brand: "Apple", model: "Iphone 7S", price: 700, inStock: true, lastUpdated: Date.now() },
        { id: 3, brand: "Samsung", model: "Galaxy S8", price: 1200, inStock: true, lastUpdated: Date.now() },
        { id: 4, brand: "Samsung", model: "Galaxy S7", price: 800, inStock: true, lastUpdated: Date.now() }];
    }
}