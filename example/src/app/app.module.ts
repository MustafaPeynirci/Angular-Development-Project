import { SummaryPipe } from './summary.pipe';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ProductComponent } from './product/product.component';
import { InputEmailDirective } from './input-email.directive';

@NgModule({
  declarations: [
    ProductComponent,
    SummaryPipe,
    InputEmailDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ProductComponent]
})
export class AppModule { }
