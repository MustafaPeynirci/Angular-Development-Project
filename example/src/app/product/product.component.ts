import { Product } from './../product.model';
import { ProductRepository } from './../repository.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  model: ProductRepository = new ProductRepository()
  product: Product = this.model.getProductById(1)

  constructor() { }

  ngOnInit(): void {
  }

  onKeyUp($event) {
    if ($event.keyCode === 13) {
      console.log("enter was pressed");
    }
  }
  onKeyUp2() {
    console.log("enter was pressed onKeyUp2");
  }
  onKeyUp3($event) {
    console.log($event.target.value);
  }
  onKeyUp4(x) {
    console.log(x);
  }

}
