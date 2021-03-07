import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public cart: Array<any> = [];
  public total: number = 0;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

    let tmp:any = localStorage.getItem("carrello");
    let cart = JSON.parse(tmp);
    console.log(cart);
    if(cart!=null){
      this.cart = cart;
      for(let i of cart){
        this.total += i.details.price;
      }
    }
  }

  clearCart(){
    localStorage.clear();
    location.reload();
  }

  goToHome() {
    this.router.navigate(['home']);
  }
}
