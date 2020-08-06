import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  LogoImgSrc:string='assets/images/logo/لوجو الكنيسة.jpg';
  LogoImgSrcAlt:string='كنيسة السيدة العذراء و البابا كيرلس عمود الدين';
  LogoImgSrcStyle:string='width: 70px;height: 70px;';

  NavbarItems:string[]=[
    'الصفحة الرئيسية',
    'روئية الكنيسة',
    'آباء الكنيسة',
    'بث مباشر',
    'للمزيد',
    'حجز القداس و العضوية الكنسية'
  ];

  DropDownItems:string[]=[
    'خدمات الكنيسة',
    'معرض الصور',
    'موضوعات روحية',
    'مكتبة البث المباشر',
    'طلبات',
    'تبرعات'
  ];
  NavStyle:string='navbar navbar-expand-sm navbar-expand-lgs  bg-dark navbar-dark fixed-top';
  constructor() { }

  ngOnInit(): void {
  }
  NavClass(){
    return 'navbar navbar-expand-sm navbar-dark bg-dark';
  }
}
