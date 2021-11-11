import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users = [
    { name: 'khiara', email: "khiara@mail.com" },
    { name: 'arjilo', email: 'arjilo@gmail.com' },
  ];

  constructor() { }

  ngOnInit(): void {
    
  }

}
