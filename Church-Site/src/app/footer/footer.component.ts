import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [`
  .fo{
    background-color: black;
    width: 100%;
}

  `]
})
export class FooterComponent implements OnInit {
  CRat:string='ST MARY CHURCH';
  constructor() { }

  ngOnInit(): void {
  }

}
