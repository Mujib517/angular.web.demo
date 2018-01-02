import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import 'rxjs/add/operator/do';
import { Observable } from "rxjs";


@Injectable()
export class ProductInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        var newReq = req.clone({ headers: req.headers.set("x-custom", "x-value") });
        return next.handle(newReq)
            .do(res => console.log("Interceptor Response", res));
    }
}