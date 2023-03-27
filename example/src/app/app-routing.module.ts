import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { EditProductComponent } from "./products/edit-product/edit-product.component";
import { LowerProductComponent } from "./products/lower-product/lower-product.component";
import { ProductsComponent } from "./products/products.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
    { path: "", component: HomeComponent },
    { path: "home", component: HomeComponent },
    { path: "login", component: LoginComponent },
    {
        path: "products", component: ProductsComponent, children: [
            { path: ":id", component: LowerProductComponent },
            { path: ":id/edit", component: EditProductComponent }
        ]
    },
    {
        path: "users", component: UsersComponent, children: [
            { path: ":name", component: UserComponent }
        ]
    },
    { path: "**", component: NotfoundComponent }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)

    ],
    exports: [RouterModule]
})

export class AppRoutingModule {

}