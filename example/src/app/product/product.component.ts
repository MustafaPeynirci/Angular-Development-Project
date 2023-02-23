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

  today: number = Date.now()
  title: string = "Angular Course"
  student: number = 525217
  price: number = 395.9916
  completed: number = 0.26

  text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."

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
