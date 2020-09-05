import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ HttpClientModule }from '@angular/common/http';
import{ ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserRegisterComponent } from './user-register/user-register.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductComponent } from './product/product.component';
import { OrderComponent } from './order/order.component';
import { PersonalComponent } from './personal/personal.component';
import { CartComponent } from './cart/cart.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AdmindetailComponent } from './admindetail/admindetail.component';
import { AdminProductListComponent } from './admin-product-list/admin-product-list.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserRegisterComponent,
    AdminhomeComponent,
    UserhomeComponent,
    PagenotfoundComponent,
    ProductComponent,
    OrderComponent,
    PersonalComponent,
    CartComponent,
    AddproductComponent,
    AdmindetailComponent,
    AdminProductListComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
