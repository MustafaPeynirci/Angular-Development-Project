import { AdminCategoriesComponent } from './admin-categories/admin-categories.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth-guard.service';

const routes: Routes = [
  {
    path: "admin", canActivate: [AuthGuard], component: AdminComponent, children: [
      {
        path: "", children: [
          { path: "products", component: AdminProductsComponent },
          { path: "categories", component: AdminCategoriesComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
