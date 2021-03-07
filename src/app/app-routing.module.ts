import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import { DetailsComponent } from "./details/details.component";
import { AddItemComponent } from './add-item/add-item.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path:"home", component: ItemsComponent },
  { path:"", redirectTo:"/home", pathMatch: 'full'  },
  { path:'detail', component: DetailsComponent },
  { path: 'add-item', component: AddItemComponent},
  { path: 'cart', component: CartComponent},
  { path: '**', component: DetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
