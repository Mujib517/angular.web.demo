import { ProductService } from "./product.service";
import { NgModule } from "@angular/core";
import { TimePipe } from "./time.pipe";
import { ProductResolver } from "./product.resolver";
import { ConsoleLogger } from "./console.logger.service";
import { FileLogger } from "./file.logger.service";

@NgModule({
    declarations: [TimePipe],
    providers: [ProductService, ProductResolver, {provide:ConsoleLogger,useClass:FileLogger}],
    exports: [TimePipe]
})
export class SharedModule { }