import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ourfathersinfo',
  templateUrl: './ourfathersinfo.component.html',
  styleUrls: ['./ourfathersinfo.component.css']
})
export class OurfathersinfoComponent implements OnInit {
  Path1:string='assets/images/fathers/ابونا زكريا.jpeg';
  Path2:string='assets/images/fathers/ابونا مرقس.jpeg';
  Path3:string='assets/images/fathers/ابونا يؤن.PNG';
  Path4:string='assets/images/fathers/ابونا يوحنا.PNG';
  st:string="background: url('assets/images/fathers/ابونا بيشوي.jpg');background-attachment: fixed;background-repeat: no-repeat;background-size: cover;";
  Paragraphs:string[]=[
    `
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla facilis, sequi excepturi, quisquam, dignissimos
                  molestiae dicta dolore dolores quas vel sunt placeat tempora expedita suscipit. Magni vel iusto mollitia
                  exercitationem.
    ` , 
    `
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla facilis, sequi excepturi, quisquam, dignissimos
                  molestiae dicta dolore dolores quas vel sunt placeat tempora expedita suscipit. Magni vel iusto mollitia
                  exercitationem.
    ` , 
    `
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla facilis, sequi excepturi, quisquam, dignissimos
                  molestiae dicta dolore dolores quas vel sunt placeat tempora expedita suscipit. Magni vel iusto mollitia
                  exercitationem.
    ` , 
    `
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla facilis, sequi excepturi, quisquam, dignissimos
                  molestiae dicta dolore dolores quas vel sunt placeat tempora expedita suscipit. Magni vel iusto mollitia
                  exercitationem.
    `
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
