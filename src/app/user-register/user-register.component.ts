import { Component, OnInit } from '@angular/core';
import{faUnlockAlt, faMobileAlt} from '@fortawesome/free-solid-svg-icons';
import{ faMobile } from '@fortawesome/free-solid-svg-icons';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import{ Router } from '@angular/router';


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  public faUnlockAlt=faUnlockAlt;
  public faMobile=faMobile;

  fbformgroup= this.fb.group({
    firstname:['',Validators.required],
    lastname:['',Validators.required],
    username:['',[ Validators.required,
      Validators.min(5),
      Validators.max(10),
      Validators.pattern(/([a-z][A-z][0-9]){1}/),]],
    password:['',[ Validators.required,
      Validators.min(5),
      Validators.max(10),
      Validators.pattern(/([a-z][A-z][0-9]){1}/),]] ,
    email:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
    address:['',Validators.required],
    mobile:['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
  })

  constructor(private fb: FormBuilder , private http: HttpClient , private router:Router) { }

  ngOnInit(): void {
  }
  
  async onsubmit(){
    const Data=this.fbformgroup.value;
    console.log(Data);

    const url ='http://localhost:3000/userReg';
    const result = await this.http.post(url,Data).toPromise();

    this.router.navigate(['login']);
    this.fbformgroup.reset();
  }

  gotologin(){
    this.router.navigate(['login']);
  }
}
