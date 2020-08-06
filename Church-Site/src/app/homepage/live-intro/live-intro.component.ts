import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-live-intro',
  templateUrl: './live-intro.component.html',
  styleUrls: ['./live-intro.component.css']
})
export class LiveIntroComponent implements OnInit {
  VedTitle:string='البث المباشر';
  St:string="background: url('assets/images/homepage/media.jpg');background-attachment: fixed;background-repeat: no-repeat;";
  constructor() { }

  ngOnInit(): void {
  }

}
