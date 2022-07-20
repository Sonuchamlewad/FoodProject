import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountComponent } from './account/account.component';
import {CartComponent} from './cart/cart.component';
import { SearchComponent } from './search/search.component';
import { FilterPipe } from './Shared/filter.pipe';
import { AddfoodComponent } from './addfood/addfood.component';
import { UpdateComponent } from './update/update.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FinalorderComponent } from './finalorder/finalorder.component';
import { AdashboardComponent } from './adashboard/adashboard.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { AddfoodadminComponent } from './addfoodadmin/addfoodadmin.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    AccountComponent,
    CartComponent,
    SearchComponent,
    AddfoodComponent,
    FilterPipe,
    UpdateComponent,
    CheckoutComponent,
    FinalorderComponent,
    AdashboardComponent,
    OrderdetailsComponent,
    AddfoodadminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    

  ],
 
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }