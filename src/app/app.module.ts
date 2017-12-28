import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductComponent } from './product/product.component';
import { ProductService } from "./shared/product.service";
import { UsersComponent } from './users/users.component';
import { TimePipe } from "./shared/time.pipe";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Route } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const ROUTES: Route[] = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'products', component: ProductListComponent },
    { path: '**', component: HomeComponent }];

@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule, RouterModule.forRoot(ROUTES)],
    declarations: [AppComponent, HomeComponent, ProductListComponent, ProductComponent, UsersComponent, TimePipe, HeaderComponent, FooterComponent, AboutComponent, ContactComponent],
    providers: [ProductService],
    bootstrap: [AppComponent]
})
export class AppModule { }