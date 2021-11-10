import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private api: HttpClient) { }

  ngOnInit(): void {}

  fCEmail = new FormControl();
  fCPassword = new FormControl();

  async login() {
    var result = await this.api.get(environment.API_URL + "/user/all").toPromise();
      console.log(result);

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
