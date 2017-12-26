import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable()
export class ProductService {

    constructor(private http: HttpClient) { }

    get() {
        return this.http.get("https://express-api.herokuapp.com/api/products");
    }

    save(product) {
        return this.http.post("https://express-api.herokuapp.com/api/products", product);
    }
}