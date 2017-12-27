import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";


@Injectable()
export class ProductService {

    private _baseUrl = environment.baseUrl;

    constructor(private http: HttpClient) { }

    get() {
        return this.http.get(`${this._baseUrl}api/products`);
    }

    save(product) {
        return this.http.post(`${this._baseUrl}api/products`, product);
    }
}