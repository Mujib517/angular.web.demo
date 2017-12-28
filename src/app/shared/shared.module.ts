import { ProductService } from "./product.service";
import { NgModule } from "@angular/core";
import { TimePipe } from "./time.pipe";

@NgModule({
    declarations:[TimePipe],
    providers:[ProductService],
    exports:[TimePipe]
})
export class SharedModule{}