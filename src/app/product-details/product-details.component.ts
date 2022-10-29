import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { product } from '../models/product';
import { ActivatedRoute } from '@angular/router';
import { CartItemsService } from '../services/cart-items.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  id: any;
  productItem: any;
  quantity: any;
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private cartItems: CartItemsService
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getPorductById();

  }
  getPorductById() {
    this.dataService.getProducts().subscribe((data: any) => {
      this.productItem = data.filter((item: any) => {
        if (item.id == this.id) return item;
      })[0];
      this.productItem.quantity = 0;
    });
  }
  addToCart() {
    this.cartItems.addToCart(this.productItem);
  }
}

