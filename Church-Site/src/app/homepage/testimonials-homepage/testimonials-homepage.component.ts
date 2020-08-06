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
    {title:'المقولة: الذين لم يجربوا لذة محبة الله هم مساكين وتعساء، فالله يعطي لمحبيه طيبًا، وبه يسكرهم ويلذذهم ',body:'القديس :القديس يوحنا سابا'},
    {title:'المقولة: هناك طريقة تتخلص بها من عدوك وهي ان تحول العدو إلي صديق ',body:'القديس :القديس يوحنا الذهبي الفم'},
    {title:'المقولة: القلب المتضع كالوادى المنخفض الذى سرعان ما يمتلىء من ماء الروح',body:'القديس :القديس أغسطينوس'}
  ];
}
