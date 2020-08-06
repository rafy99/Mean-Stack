import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials-homepage',
  templateUrl: './testimonials-homepage.component.html',
  styleUrls: ['./testimonials-homepage.component.css']
})
export class TestimonialsHomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Fathersqoutes=[
    {title:'المقولة: المقولةالمقولةالمقولةالمقولةالمقولة',body:'القديس :.......'},
    {title:'المقولة: المقولةالمقولةالمقولةالمقولةالمقولةالمقولة',body:'القديس :.......'},
    {title:'المقولة:المقولةالمقولة المقولةالمقولةالمقولة',body:'القديس :........'}
  ];
}
