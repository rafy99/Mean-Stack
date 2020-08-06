import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-church-more-info',
  templateUrl: './church-more-info.component.html',
  styleUrls: ['./church-more-info.component.css']
})
export class ChurchMoreInfoComponent implements OnInit {
  
  PageHeaderStyleInfo:string="background: url('assets/images/churchmoreinfo/الكنيسة من الداخل.JPG');background-attachment: fixed;height:450px;";

  Content=[
    `تاريخ الكنيسة`,
    `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, fuga eaque. Amet, assumenda aliquid tempore dolorum
            error eveniet doloribus sed repellat quod, dolores fuga ipsam soluta. Aliquam accusantium pariatur aut sint deleniti
            laborum ducimus voluptatem? Architecto cumque quod suscipit officiis soluta, voluptate dicta blanditiis similique
            praesentium temporibus adipisci debitis labore!
    `,
    `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, fuga eaque. Amet, assumenda aliquid tempore dolorum
            error eveniet doloribus sed repellat quod, dolores fuga ipsam soluta. Aliquam accusantium pariatur aut sint deleniti
            laborum ducimus voluptatem? Architecto cumque quod suscipit officiis soluta, voluptate dicta blanditiis similique
            praesentium temporibus adipisci debitis labore!
    `
  ]
  Cards=[
  {title:'Sample Heading',body:`Lorem ipsum dolor sit amet consectetur
   adipisicing elit. Molestias, adipisci.`},
   {title:'Sample Heading',body:`Lorem ipsum dolor sit amet consectetur
   adipisicing elit. Molestias, adipisci.`},
   {title:'Sample Heading',body:`Lorem ipsum dolor sit amet consectetur
   adipisicing elit. Molestias, adipisci.`},
   {title:'Sample Heading',body:`Lorem ipsum dolor sit amet consectetur
   adipisicing elit. Molestias, adipisci.`},
  {title:'Sample Heading',body:`Lorem ipsum dolor sit amet consectetur
   adipisicing elit. Molestias, adipisci.`},
   {title:'Sample Heading',body:`Lorem ipsum dolor sit amet consectetur
   adipisicing elit. Molestias, adipisci.`}
  ]
  constructor() { }

  ngOnInit(): void {
  }
  BgImgSrc(){
    return 'assets/images/churchmoreinfo/الكنيسة من الداخل.JPG';
  }
  ParaStyle(){
    return 'text-justify px-5';
  }
}
