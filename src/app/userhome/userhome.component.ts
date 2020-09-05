import { Component, OnInit } from '@angular/core';
import{ Router } from '@angular/router';
import{ faShoppingCart} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
  public faShoppingCart=faShoppingCart;

  constructor(private router:Router) { }

  ngOnInit(): void {
    const sid=sessionStorage.getItem('sid');
    if(!sid){
      this.router.navigate(['login']);
    }
  }

  userlogout() {

    sessionStorage.removeItem('sid');
    this.router.navigate(['login']);
  }

  gotologin(){
    this.router.navigate(['login']);
  }

}
