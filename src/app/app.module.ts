import { NgModule, BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule, RoutingModule, SharedModule }
    from './module.barrel';

import { AppComponent, HomeComponent, ProductListComponent, ProductComponent, UsersComponent, HeaderComponent, FooterComponent, AboutComponent, ContactComponent, NewProductComponent, ProductDetailComponent, SpecsComponent, ReviewsComponent, LoginComponent }
    from './app.barrel';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule, RoutingModule, SharedModule],
    declarations: [AppComponent, HomeComponent, ProductListComponent, ProductComponent, UsersComponent, HeaderComponent, FooterComponent, AboutComponent, ContactComponent, NewProductComponent, ProductDetailComponent, SpecsComponent, ReviewsComponent, LoginComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }