import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product, products } from '../products';
import { CartService } from '../cart.service';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product:Product | any

  star:string = `<svg xmlns="http://www.w3.org/2000/svg" style="height: 25px; width:25px;fill:#FDCC0D" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>`
  
  rating = document.getElementById("rating-container")

  starRating:any=""

  constructor(private route: ActivatedRoute, private cartService:CartService, private snackBar: MatSnackBar, private router:Router, private sanitizer:DomSanitizer) { }

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap
    const productIdFromRoute = Number(routeParams.get('productId'))
    this.product = products.find(product => product.id === productIdFromRoute)
    this.starRating=this.sanitizer.bypassSecurityTrustHtml(this.star.repeat(this.product.rating.rate))
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
