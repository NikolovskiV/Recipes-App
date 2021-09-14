import { Component, OnInit } from '@angular/core';
import { ComponentservicesService } from '../componentservices.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
   items: any;
   idMeal: any;
   recipes: any;
   product: any;


  constructor(private componentService: ComponentservicesService) { }



  ngOnInit(): void {
    this.items = this.componentService.getItems();
    console.log(this.items);
  }

  // onSubmit(): void{
  //   // Process checkout data here
  //   this.items = this.componentService.deleteItem();
  //   console.warn('Your order has been submitted');
  //   console.log(this.idMeal);
  // }

  removeItem(index: number): void { //get index from template and pass it to service, remove item in service
     this.componentService.removeItem(index);
     //reload component so you get the new data with array without removed item
  }
    // this.items.splice(index, 1);
    // if (!this.ngOnInit) {
    //   return;

    //const index = this.items.indexOf(this.)
    // this.items.splice(index, 1);

}
