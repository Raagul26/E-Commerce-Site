import { Component, Input } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'E-Commerce-Site';

  constructor(private cartService:CartService){}
  
  getItemsCount()
  {
    return this.cartService.getItems().length
  }
}
