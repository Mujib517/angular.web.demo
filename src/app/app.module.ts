import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductComponent } from './product/product.component';
import { ProductService } from "./shared/product.service";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, HomeComponent,ProductListComponent, ProductComponent],
    providers:[ProductService],
    bootstrap: [AppComponent]
})
export class AppModule { }