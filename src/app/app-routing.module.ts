import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
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

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path:'usersignup', component:UserRegisterComponent},
  {path:'adminsignup', component:RegisterComponent},
  {path:'adminhome',component:AdminhomeComponent ,
  children:[
    {path:'',component:AddproductComponent},
    {path:'admindetail',component:AdmindetailComponent},
    {path:'productList',component:AdminProductListComponent},
  ]},

  {path:'userhome',component:UserhomeComponent,
  children:[
    {path:'',component:ProductComponent},
    {path:'order',component:OrderComponent},
    {path:'userdetail',component:PersonalComponent},
    {path:'cart',component:CartComponent}
  ]},

  {path:'',redirectTo: 'login',pathMatch:'full'},
  {path:'**' ,component:PagenotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
