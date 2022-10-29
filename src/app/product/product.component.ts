import { product } from './../models/product';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() product: product = {} as product;
  @Output() onChangeQuantityProduct = new EventEmitter();
  constructor() {}
  ngOnInit(): void {
    this.product.quantity = 0;
  }
  addToCart() {
    this.onChangeQuantityProduct.emit(this.product);
  }
}
