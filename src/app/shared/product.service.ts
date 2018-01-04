import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs/Observable";
import { Product } from "./models/product.model";
import 'rxjs/add/operator/map';


@Injectable()
export class ProductService {

    private _baseUrl = environment.baseUrl;

    reviews: any[];

    constructor(private http: HttpClient) { }

    get(): Observable<Product[]> {
        return this.http.get(`${this._baseUrl}api/products`)
            .map(res => <Product[]>res["products"]);
    }

    getById(id) {
        return this.http.get(`${this._baseUrl}api/products/${id}`)
    }

    save(product) {
        return this.http.post(`${this._baseUrl}api/products`, product);
    }

    delete(id) {
        return this.http.delete(`${this._baseUrl}api/products/${id}`);
    }
}