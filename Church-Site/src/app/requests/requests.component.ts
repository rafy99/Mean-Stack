import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
ContStyle(){
  return "background: linear-gradient(rgba(0, 0, 54, 0.6),rgba(0, 0, 54, 0.6)), url('assets/images/carousel/im1.JPG');background-size: cover;";
}
}
