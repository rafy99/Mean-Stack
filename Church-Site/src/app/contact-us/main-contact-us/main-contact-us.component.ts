import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-contact-us',
  templateUrl: './main-contact-us.component.html',
  styleUrls: ['./main-contact-us.component.css']
})
export class MainContactUsComponent implements OnInit {
  bgcolor:string='background-color: rgba(193, 66, 66, 0.2);';
  Ccolor:string='color: #B42508;';
  constructor() { }

  ngOnInit(): void {
  }
  retstyle(){
    return `background-color: rgba(193, 66, 66, 0.2);color: #B42508;`;
  }
}
