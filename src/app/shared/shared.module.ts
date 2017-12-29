import { ProductService } from "./product.service";
import { NgModule } from "@angular/core";
import { TimePipe } from "./time.pipe";
import { ProductResolver } from "./product.resolver";

@NgModule({
    declarations:[TimePipe],
    providers:[ProductService,ProductResolver],
    exports:[TimePipe]
})
export class SharedModule{}