import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Food } from '../models/Food';
import { ProductService } from '../services/product.service';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(public httpc: HttpClient, private _foodservice: ProductService, private _router: Router) { }

  ngOnInit(): void {
  }
  addfood: Food = new Food();
  addfoods: Array<Food> = new Array<Food>();

  AddFood() {
    console.log(this.addfood)

    var addo = {
      id:Number(this.addfood.id),
      foodName: this.addfood.foodName,
      place:this.addfood.place,
      restaurantName:this.addfood.restaurantName,
      foodDescription: this.addfood.foodDescription,
      foodFinal: Number(this.addfood.foodFinal),
      foodMrp: Number(this.addfood.foodMrp),
      foodDiscount: Number(this.addfood.foodDiscount),
      foodImage: this.addfood.foodImage,
      IsActive: Number(this.addfood.IsActive)
    }

    this.httpc.put("https://foodprojectapi20220720003623.azurewebsites.net/api/Food", addo).subscribe(res => this.PutSuccess(res), res => this.PutError(res));
    //this.addfood = new Food();


  }

  PutSuccess(res: any) {
    console.log(res);

  }
  PutError(res: any) {
    console.log(res);
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