import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-contact-us',
  templateUrl: './header-contact-us.component.html',
  styleUrls: ['./header-contact-us.component.css']
})
export class HeaderContactUsComponent implements OnInit {
  headstyle:string="background: url('assets/images/churchmoreinfo/الكنيسة من الداخل.JPG');background-attachment: fixed;";
  constructor() { }

  ngOnInit(): void {
  }

}
