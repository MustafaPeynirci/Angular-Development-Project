import { products } from './../../products';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lower-product',
  templateUrl: './lower-product.component.html',
  styleUrls: ['./lower-product.component.css']
})
export class LowerProductComponent implements OnInit {

  selectedProduct

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let id = + this.activatedRoute.snapshot.paramMap.get("id")
    this.selectedProduct = products.find(x => x.id === id)
  }

}
