import { Component, OnInit } from '@angular/core';
import { CartItemsService } from '../services/cart-items.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  total!: number;
  user: any;
  constructor(private cartItemsService: CartItemsService) { }

  ngOnInit(): void {
    this.total = this.cartItemsService.getCalcAllProduct();
    this.user = this.cartItemsService.userName;
  }

}
