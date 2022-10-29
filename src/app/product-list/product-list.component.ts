import { Component, OnInit } from '@angular/core';
import { product } from '../models/product';
import { DataService } from '../services/data.service';
import { CartItemsService } from '../services/cart-items.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: product[] = [];
  constructor(private dataService: DataService, private cartItemsService: CartItemsService) {}

  ngOnInit(): void {
    this.dataService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
  addToCart(item: product) {
    this.cartItemsService.addToCart(item);
  }
//   sortByPrice() {
//     this.products.sort((a, b) => (a.price > b.price ? -1 : 1))
// }
}
