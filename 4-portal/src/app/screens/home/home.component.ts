import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // users = [
  //   { name: 'khiara', age: "21", email: "khiara@mail.com" },
  //   { name: 'Leanne Graham', age: '18', email: 'sincere@april.biz' },
  //   { name: 'Ervin Howell', age: '21', email: 'shanna@melissa.tv' },
  //   { name: 'Nathan Plains', age: '25', email: 'nathan@yesenia.net' },
  //   { name: 'Patricia Lebsack', age: '18', email: 'patty@kory.org' },
  // ];

  constructor(private router: Router, private api: HttpClient) { }

  ngOnInit(): void {
    
  }

}
