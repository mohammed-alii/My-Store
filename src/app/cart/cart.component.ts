import { product } from './../models/product';
import { Component, OnInit } from '@angular/core';
import { CartItemsService } from '../services/cart-items.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  items: product[] = [] as product[];
  username!: string;
  address!: string;
  credit!: number;
  total: any;
  quantity!: number;
  constructor(private cartItemsService: CartItemsService) {}

  ngOnInit(): void {
    this.items = this.cartItemsService.cartItem;
    this.total = this.cartItemsService.getCalcAllProduct();
    this.Checker()
  }
  Checker() {
    if (this.items.length <= 0) {
      alert(`your cart is empty please add product to cart and try again.`)
    }
  }
  onChangeQuantity(product: product) {
    this.cartItemsService.addToCart(product);
    this.total = this.cartItemsService.getCalcAllProduct();
  }
  onSubmit() {
    this.cartItemsService.getUserName(this.username);
  }
}
