import { Injectable } from '@angular/core';
import { product } from '../models/product';
@Injectable({
  providedIn: 'root',
})
export class CartItemsService {
  cartItem: product[] = [];
  total: number = 0;
  userName: any;
  constructor() {}

  addToCart(item: product) {
    const index = this.cartItem.findIndex(
      (cartItem) => cartItem.id === item.id
    );
    if (index == -1) {
      this.cartItem.push(item);
    } else {
      this.cartItem[index] = item;
    }
  }
  getCalcAllProduct() {
    const total = this.cartItem.map((obj) => obj.price * obj.quantity);
    return total.reduce((a, b) => a + b, 0);
  }
  getUserName(username:any) {
    const user = username;
    this.userName = user;
  }
}
