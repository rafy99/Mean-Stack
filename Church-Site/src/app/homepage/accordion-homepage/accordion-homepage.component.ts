import { Synod } from './../../synodrule.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion-homepage',
  templateUrl: './accordion-homepage.component.html',
  styleUrls: ['./accordion-homepage.component.css']
})
export class AccordionHomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  AccordionObj=[
    {title:'اعلانات يومية',body:'تحت الانشاء'},
    {title:'اخبار كنسية',body:'تحت الانشاء'},
    {title:'اعلانات مبوبة',body:'تحت الانشاء'},
    {title:'معلومات طقسية',body:'تحت الانشاء'}
  ];

  sr:Synod[]=[
    new Synod('القرارات بخصوص .....','القرااااار القرااار قرااار'),
    new Synod('القرارات بخصوص .....','القرااااار القرااار قرااار')
  ]

  Katamaras=[
    {title:'مزمور عشية',body:'لا يوجد محتوي'},
    {title:'انجيل العشية ',body:'لا يوجد محتوي'},  
    {title:'مزمور باكر',body:'لا يوجد محتوي'},
    {title:'انجيل باكر',body:'لا يوجد محتوي'},   
    {title:'البولس',body:'لا يوجد محتوي'},
    {title:'الكاثوليكون',body:'لا يوجد محتوي'},   
    {title:'الابراكسيس',body:'لا يوجد محتوي'},
    {title:'السنكسار',body:'لا يوجد محتوي'},   
    {title:'مزمور القداس',body:'لا يوجد محتوي'},
    {title:'انجيل القداس',body:'لا يوجد محتوي'}
  ]

  LinkStyle(){
    return 'text-decoration: none;';
  }
  LinkStyle1(){
    return 'text-decoration: none;color: #5C097C;';
  }
  accoroddstyle(){return 'background-color:#DB88FA;';}
  accoroddcolor(){return 'color: #5C097C;';}
  accorevenstyle(){return 'background-color: #35EEF0;';}
}
