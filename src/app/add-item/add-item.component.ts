import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder } from "@angular/forms";
import { Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})

export class AddItemComponent {

  i: number = 12;

  addItem = this.fb.group({
    product: ['', Validators.required],
    brand: ['', Validators.required],
    model: ['', Validators.required],
    display: [''],
    camera: [''],
    camera2: [''],
    battery: [''],
    cpu: [''],
    memory: [''],
    ram: [''],
    so: [''],
    price: ['', Validators.required]
  })

  constructor(
    private router: Router,
    private fb: FormBuilder,
    public db: AngularFirestore
  ) { }

  newItem() {
    this.i +1;
    this.db.firestore.collection('items').doc(this.i.toString()).set({
      productName : this.addItem.value.product,
      brand : this.addItem.value.brand,
      model : this.addItem.value.model,
      display : this.addItem.value.display,
      camera : this.addItem.value.camera,
      camera2 : this.addItem.value.camera2,
      battery : this.addItem.value.battery,
      cpu : this.addItem.value.cpu,
      memory : this.addItem.value.memory,
      ram : this.addItem.value.ram,
      so : this.addItem.value.so,
      price : this.addItem.value.price,
    })
    alert("Item added!")
  }

  goBack() {
    this.router.navigate(['home']);
  }
}
