import { Component, OnInit } from '@angular/core';
import{ Router } from '@angular/router';


@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    const sid=sessionStorage.getItem('sid');
    if(!sid){
      this.router.navigate(['login']);}
  }

  adminlogout() {

    sessionStorage.removeItem('sid');
    this.router.navigate(['login']);
  }

  gotologin(){
    this.router.navigate(['login']);
  }

}
