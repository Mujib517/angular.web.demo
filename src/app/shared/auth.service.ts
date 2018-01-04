import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AuthService {

    constructor(private http: HttpClient) { }

    login(user) {
        return this.http.post(environment.baseUrl + "api/users/login", user)
            .catch(err => Observable.throw("Failed to login"));
    }

    saveToken(token) {
        localStorage.setItem("token", token);
    }

    getToken() {
        return localStorage.getItem("token");
    }
}