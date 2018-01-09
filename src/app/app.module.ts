import { NgModule, BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule, RoutingModule, SharedModule }
    from './module.barrel';

import { AppComponent, HomeComponent, ProductListComponent, ProductComponent, UsersComponent, HeaderComponent, FooterComponent, AboutComponent, ContactComponent, NewProductComponent, ProductDetailComponent, SpecsComponent, ReviewsComponent, LoginComponent }
    from './app.barrel';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule, RoutingModule, SharedModule, InfiniteScrollModule],
    declarations: [AppComponent, HomeComponent, ProductListComponent, ProductComponent, UsersComponent, HeaderComponent, FooterComponent, AboutComponent, ContactComponent, NewProductComponent, ProductDetailComponent, SpecsComponent, ReviewsComponent, LoginComponent],
    bootstrap: [AppComponent],
    exports:[InfiniteScrollModule]
})
export class AppModule { }