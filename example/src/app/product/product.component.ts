import { ProductRepository } from './../repository.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  model: ProductRepository = new ProductRepository()

  constructor() { }

  ngOnInit(): void {
  }

}
