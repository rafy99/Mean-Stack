import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todaylive',
  templateUrl: './todaylive.component.html',
  styleUrls: ['./todaylive.component.css']
})
export class TodayliveComponent implements OnInit {
  PT:string="شاهد احدث بث مباشر اليوم";
  TitleArr:string[]=[
    'بث للقداس',
    'بث للنهضة',
    'بث للاجتماع'
  ];
  st:string="background: url('assets/images/ourfathersinfo/im2.jpg');background-attachment: fixed;height: 450px;";
  constructor() { }

  ngOnInit(): void {
  }

}
