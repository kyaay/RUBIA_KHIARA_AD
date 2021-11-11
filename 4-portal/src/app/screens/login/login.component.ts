import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private api: ApiService) { }

  ngOnInit(): void {}

  fcEmail = new FormControl();
  fcPassword = new FormControl();
  requestResult = '';

  async login() {
    var result:any = await this.api.post
      ('/user/login',
        {
          "email": this.fcEmail.value, "password": this.fcPassword.value
        }
      );
    if(result.success){
      this.nav('home');
    }

    // if (this.fCEmail.value == "khiara@gmail.com" && this.fCPassword.value == "1234"){
    //   this.nav('home');
    // }
    // else{
    //   alert("Incorrect credentials");
    //   console.log("Nagkamali ka ng susi");
    // }
  }
  nav(destination: string) {
    this.router.navigate([destination]);
  }

}
