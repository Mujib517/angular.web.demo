import { ProductService } from "./product.service";
import { NgModule } from "@angular/core";
import { TimePipe } from "./time.pipe";
import { ProductResolver } from "./product.resolver";
import { ConsoleLogger } from "./console.logger.service";
import { FileLogger } from "./file.logger.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { ProductInterceptor } from "./product.interceptor";
import { AuthService } from "./auth.service";
import { ShowDirective } from "./show.directive";

@NgModule({
    declarations: [TimePipe, ShowDirective],
    providers: [ProductService, ProductResolver, AuthService,
        { provide: ConsoleLogger, useClass: FileLogger },
        { provide: HTTP_INTERCEPTORS, useClass: ProductInterceptor, multi: true }],
    exports: [TimePipe, ShowDirective]
})
export class SharedModule { }