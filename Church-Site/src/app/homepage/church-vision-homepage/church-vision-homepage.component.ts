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
    title:'كنيسة السيدة العذراء و البابا كيرلس عمود الدين ترحب بكم',
    MainVision:'تحت الانشاء',
    MoreVision:'تحت الانشاء'
  }

  JumbClass(){
    return 'jumbotron text-center roia mt-0';
  }
  btnstyle(){return 'background-color: #A52508;';}
  carostyle(){return 'background-color: #51CD1E;';}
}
