import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product, products } from '../products';
import { CartService } from '../cart.service';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product:Product | any
  constructor(private route: ActivatedRoute, private cartService:CartService, private snackBar: MatSnackBar, private router:Router) { }

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap
    const productIdFromRoute = Number(routeParams.get('productId'))
    this.product = products.find(product => product.id === productIdFromRoute)
  }

  addToCart(product:Product)
  {
    this.cartService.addToCart(product)
    // window.alert('Your product has been added to the cart!');
    // console.log(this.cartService.getItems())
    this.openSnackBar("Item added to cart","Go to cart")
  }

  openSnackBar(message: string, action: string) {
    let snack = this.snackBar.open(message, action, {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 2000
    });
    
    snack.onAction().subscribe(() => {
      this.router.navigate(['/cart'])
    });
  }
  
}
