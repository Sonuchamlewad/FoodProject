import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserData } from '../models/UserData';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData: UserData = new UserData();
  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit(): void {
  }

  LoginUser() {
    this._auth.loginUser(this.loginUserData).subscribe(res => {
      localStorage.setItem('token', res.token);
      if (res.isRestaurant)
        this._router.navigate(['/dashboard']);
      else if(res.isAdmin)
      this._router.navigate(['/adashboard']);
      else 
        this._router.navigate(['/cart']);
    }, err => console.log(err));
  }

}