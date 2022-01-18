import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }

  items:any[] = []
  
  addToCart(product:any)
  {
    if(this.items.includes(product))
    {
      this.items.find(prod=>prod.id==product.id).qty+=1
    }
    else
    {
      product.qty=1
      this.items.push(product)
    }
  }

  getItems()
  {
    return this.items
  }

  clearCart()
  {
    this.items=[]
    return this.items
  }

  getShippingPrices()
  {
    return this.http.get<{type:string, price:number}[]>('/assets/shipping.json')
  }

  getTotalPrice()
  {
    let total=0
    for(let item of this.items)
    {
      total+=item.price*item.qty
    }
    return total
  }
  
}

