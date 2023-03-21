import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SummaryPipe } from './summary.pipe';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ProductComponent } from './product/product.component';
import { InputEmailDirective } from './input-email.directive';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { Product2Component } from './product2/product2.component';
import { PostsComponent } from './posts/posts.component';
import { GeneralComponent } from './general/general.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { CategoriesComponent } from './categories/categories.component';

@NgModule({
  declarations: [
    ProductComponent,
    SummaryPipe,
    InputEmailDirective,
    AdminProductsComponent,
    Product2Component,
    PostsComponent,
    GeneralComponent,
    HomeComponent,
    ProductsComponent,
    UsersComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [GeneralComponent]
})
export class AppModule { }
