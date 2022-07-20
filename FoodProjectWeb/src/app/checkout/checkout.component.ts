import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { order } from '../models/order';
import { ProductService } from '../services/product.service';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(public httpc: HttpClient, private _foodservice: ProductService, private _router: Router) { }

  ngOnInit(): void {
  }

  addfood: order = new order();
  addfoods: Array<order> = new Array<order>();

  AddFood() {
    console.log(this.addfood)

    var addo = {
      
      firstName: this.addfood.firstName,
      
      lastName:this.addfood.lastName,
      Email: this.addfood.email,
      
      PhoneNo: this.addfood.phoneNo,
      Address: this.addfood.address,
      paymentmode:this.addfood.paymentmode
    }

    this.httpc.post("https://localhost:44316/api/Order", addo).subscribe(res => this.PostSuccess(res), res => this.PostError(res));
    this.addfood = new order();


  }

  PostSuccess(res: any) {
    console.log(res);

  }
  PostError(res: any) {
    console.log(res);
  }

  Show() {
    console.log("Hi");
    this.httpc.get("https://foodprojectapi20220720003623.azurewebsites.net/api/Order").subscribe(res => this.GetSuccess(res), res => this.GetError(res));
  }
  GetSuccess(input: any) {
    this.addfoods = input;
  }
  GetError(input: any) {
    console.log(input);
  }


}