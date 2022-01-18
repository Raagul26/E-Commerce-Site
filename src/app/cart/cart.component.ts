import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  constructor(private cartService:CartService) { }

  items=this.cartService.getItems()
  totalPrice=this.cartService.getTotalPrice()

  ngOnInit(): void {}

  clearCart()
  {
    this.items=this.cartService.clearCart()
  }

  onSubmit(): void {
    this.items = this.cartService.clearCart();
    alert('Your order has been placed successfully');
  }
}
