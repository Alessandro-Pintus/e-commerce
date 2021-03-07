import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl } from "@angular/forms";
import { Validators } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {

  search = new FormControl('' , Validators.required);

  public items: any = [];
  public filterItemList: any = [];

  public id:any;

  public filter: boolean = false;

  constructor(
    public db: AngularFirestore,
    private router: Router
    ) {

    db.firestore.collection("items").get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.exists) {
          let details = doc.data();

          let element: { [k: string]: any} = {details};
          element.id = doc.id;
          this.items.push(element);

        } else {
            console.log("No such document!");
          }
        });
    });
  }

  searchProduct() {
    this.filter = true;
    this.filterItemList = [];
    let input = this.search.value.toLowerCase();

    this.db.firestore.collection('items').where("brand", "in", [input])
      .get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.exists) {
            let details = doc.data();
            let element: { [k: string]: any} = {details};
            element.id = doc.id;

            this.filterItemList.push(element);
          } else {
            console.log("No such document!");
          }

        })
      })
  };


  getDetail() {
    this.router.navigate(['details'], { queryParams: { id: this.id } });
  }

  delete() {
    let answer;
    let deleteConfirm = confirm("Are you sure you delete the item? The operation is irreversible.");
    if (deleteConfirm == true) {
      answer = "Item deleted!";
      this.db.firestore.collection("items").doc(this.id).delete().then(() => {
        console.log("Document successfully deleted!");
        console.log("Item id deleted: "+this.id);
        location.reload();
      }).catch((error) => {
        console.error("Error removing document: ", error);
      });
    } else {
      answer = "Operation canceled!";
    }
    alert(answer);

  }

  addItem() {
    this.router.navigate(['add-item']);
  }

  addToCart() {
    let added;
    for( let i of this.items ){
      if( i.id == this.id )
        added = i;
    }
    console.log('Add to cart: '+added.details.productName)
    let temp: any = localStorage.getItem("carrello");
    if(temp!=null){

      let cart = JSON.parse(temp);
      cart.push(added);
      localStorage.setItem("carrello", JSON.stringify(cart));
    }else{
      console.log("Empty cart");
      localStorage.setItem("carrello", JSON.stringify([added]));
    }
    this.router.navigate(['cart']);
  }
 }
