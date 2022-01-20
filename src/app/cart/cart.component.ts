import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CartService} from '../cart.service'
import "@lottiefiles/lottie-player";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  constructor(private cartService:CartService, private router:Router) { }

  items=this.cartService.getItems()
  totalPrice=this.cartService.getTotalPrice()
  display = false
  
  ngOnInit(): void {}

  clearCart()
  {
    this.items=this.cartService.clearCart()   
  }

  onSubmit(): void {
    setTimeout(()=>{this.items=this.cartService.clearCart()},2500)
    this.display=true
    setTimeout(()=>{this.router.navigate([''])}, 2500)
    setTimeout(() => {this.display=false}, 2500);
  }
}
