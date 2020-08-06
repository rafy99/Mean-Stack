import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-church-vision-homepage',
  templateUrl: './church-vision-homepage.component.html',
  styleUrls: ['./church-vision-homepage.component.css']
})
export class ChurchVisionHomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ChurchVisionObject={
    title:'مرحبا بكم في كنيستنا',
    MainVision:'رؤية الكنيسة رؤية الكنيسةرؤية الكنيسةرؤية الكنيسةرؤية الكنيسةرؤية الكنيسةرؤية الكنيسةرؤية الكنيسة',
    MoreVision:'رؤية الكنيسةرؤية الكنيسةرؤية الكنيسةرؤية الكنيسةرؤية الكنيسةرؤية الكنيسةرؤية الكنيسةرؤية الكنيسةرؤية الكنيسةرؤية الكنيسةرؤية الكنيسةرؤية الكنيسةرؤية الكنيسةرؤية الكنيسةرؤية الكنيسةرؤية الكنيسةرؤية الكنيسةرؤية الكنيسةرؤية الكنيسةرؤية الكنيسةرؤية الكنيسةرؤية الكنيسةرؤية الكنيسةرؤية الكنيسةرؤية الكنيسةرؤية الكنيسةرؤية الكنيسةرؤية الكنيسةرؤية الكنيسة'
  }

  JumbClass(){
    return 'jumbotron text-center roia mt-0';
  }
}
