import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Food } from '../models/Food';
import { ProductService } from '../services/product.service';
import { Injectable } from '@angular/core';
import { foodadmin } from '../models/foodadmin';

@Component({
  selector: 'app-update',
  templateUrl: './addfoodadmin.component.html',
  styleUrls: ['./addfoodadmin.component.css']
})
export class AddfoodadminComponent implements OnInit {

  constructor(public httpc: HttpClient, private _foodservice: ProductService, private _router: Router) { }

  ngOnInit(): void {
  }
  addfood: Food = new Food();
  addfoods: Array<Food> = new Array<Food>();

  AddFood() {
    console.log(this.addfood)

    var addo = {
      
      foodName: this.addfood.foodName,
      place:this.addfood.place,
      restaurantName:this.addfood.restaurantName,
      foodDescription: this.addfood.foodDescription,
      foodFinal: Number(this.addfood.foodFinal),
      foodMrp: Number(this.addfood.foodMrp),
      foodDiscount: Number(this.addfood.foodDiscount),
      foodImage: this.addfood.foodImage,
      foodQuantity: this.addfood.foodQuantity,
      
    }

    this.httpc.post("https://foodprojectapi20220720003623.azurewebsites.net/api/Orderadmin", addo).subscribe(res => this.PostSuccess(res), res => this.PostError(res));
    this.addfood = new Food();


  }

  PostSuccess(res: any) {
    console.log(res);

  }
  PostError(res: any) {
    console.log(res);
  }
  DeleteCustomer(input: Food) {
    var index=this.addfoods.indexOf(input);
    this.addfoods.splice(index,1);
  }

  Show() {
    console.log("Hi");
    this.httpc.get("https://foodprojectapi20220720003623.azurewebsites.net/api/Food").subscribe(res => this.GetSuccess(res), res => this.GetError(res));
  }
  GetSuccess(input: any) {
    this.addfoods = input;
  }
  GetError(input: any) {
    console.log(input);
  }
  EditFood(input: Food) {
    this.addfood = input;
  }

}