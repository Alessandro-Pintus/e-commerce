import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Location } from "@angular/common";
import { Router } from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  public item: any;
  items: any;
  id:any;

  constructor(
    public db: AngularFirestore,
    private location: Location,
    private router: Router
    ) {
        this.id = window.location.search.substr(1).split("=")[1]
        db.firestore.collection("items").doc(this.id).get()
        .then((doc) => {
          if (doc.exists) {
            let details = doc.data();
            let element: { [k: string]: any} = {details};
            element.id = doc.id;
            this.item = element;
          } else {
              console.log("No such document!");
          }
      }).catch((error) => {
          console.log("Error getting document:", error);
      });
      console.log(this.id);
  }


  add() {
    console.log('Add to cart: '+this.item.details.productName)
    let temp: any = localStorage.getItem("carrello");
    if(temp!=null){
      let cart = JSON.parse(temp);
      cart.push(this.item);
      localStorage.setItem("carrello", JSON.stringify(cart));
    }else{
      console.log("Empty cart")
      localStorage.setItem("carrello", JSON.stringify([this.item]));
    }
    this.router.navigate(['cart']);
  }

  back() {
    this.location.back();
  }
}
