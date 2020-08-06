import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-homepage',
  templateUrl: './carousel-homepage.component.html',
  styleUrls: ['./carousel-homepage.component.css']
})
export class CarouselHomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  StyleCor:string[]=[
    "background: url('assets/images/church-images/الكنيسة بزاوية.jpg');background-size: cover;",
    "background: url('assets/images/church-images/صورة القبة الوسط.jpg');background-size: cover;",
    "background: url('assets/images/church-images/مذبح البابا كيرلس عامود الدين.jpg');background-size: cover;"
  ];

  StyleTextOnCor:string="font-weight: bold;color: white;";
  MoreInfoBtn="عرض المزيد";
  ChurchIntro="....انشئت الكنيسة عام .... و من بدا كان";
  PopeIntro=".....ولد القديس البابا كيرلس عام ... من والدين ... في قرية";
}
