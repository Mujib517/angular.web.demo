import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { AuthService } from "./auth.service";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class ProductInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        var authToken = localStorage.getItem("token");
        var newReq = req.clone({ headers: req.headers.set("authorization", authToken) });
        return next.handle(newReq)
            .do(res => console.log("Interceptor Response", res))
            .catch(err => {
                console.log("Err interceptor");
                return Observable.throw(err);
            });
    }
}