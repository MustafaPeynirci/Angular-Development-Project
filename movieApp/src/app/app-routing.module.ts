import { DashboardComponent } from './dashboard/dashboard.component';
import { MovieComponent } from './movie/movie.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  { path:"", redirectTo:"/dashboard", pathMatch:"full" },
  { path:"dashboard", component: DashboardComponent },
  { path:"movies", component: MovieComponent }
]

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
