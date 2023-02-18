import { MovieDetailComponent } from './movie-detail/movie-detail/movie-detail.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { LoggingComponent } from './logging/logging/logging.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MovieDetailComponent,
    LoggingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
