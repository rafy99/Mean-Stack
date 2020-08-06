import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-divine',
  templateUrl: './divine.component.html',
  styleUrls: ['./divine.component.css']
})
export class DivineComponent implements OnInit {
  bgcolor:string='background-color: rgba(193, 66, 66, 0.2);';
  Ccolor:string='color: #B42508;';
  al:string='text-align:center;';
  constructor() { }

  ngOnInit(): void {
  }

}
