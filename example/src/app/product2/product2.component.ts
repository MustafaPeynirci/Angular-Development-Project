import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.css']
})
export class Product2Component implements OnInit {

  name = new FormControl("iPhone 7 Plus")
  description = new FormControl("Nice")
  price = new FormControl("8350")
  imageUrl = new FormControl("1.png")

  constructor() { }

  ngOnInit(): void {
  }

  updateName() {
    this.name.setValue("iPhone 8 Plus")
  }

}
