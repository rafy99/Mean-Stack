import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ourfathersinfo',
  templateUrl: './ourfathersinfo.component.html',
  styleUrls: ['./ourfathersinfo.component.css']
})
export class OurfathersinfoComponent implements OnInit {
  Path1:string='assets/images/ourfathersinfo/fr-ziko.jpeg';
  Path2:string='assets/images/ourfathersinfo/fr-marcos.jpeg';
  Path3:string='assets/images/ourfathersinfo/you2nss.PNG';
  Path4:string='assets/images/ourfathersinfo/abouna youhanna.PNG';
  st:string="background: url('assets/images/ourfathersinfo/im2.jpg');background-attachment: fixed;";
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
