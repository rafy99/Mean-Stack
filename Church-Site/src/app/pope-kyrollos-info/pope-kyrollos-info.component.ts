import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pope-kyrollos-info',
  templateUrl: './pope-kyrollos-info.component.html',
  styleUrls: ['./pope-kyrollos-info.component.css']
})
export class PopeKyrollosInfoComponent implements OnInit {
  PopeStyle:string="background: url('assets/images/churchmoreinfo/الكنيسة من الداخل.JPG');background-attachment: fixed;height:450px;"
  Tit:string='تاريخ انشاء الكنيسة';
  Hist:string=`
                  Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Necessitatibus eos omnis beatae! 
                  Saepe error debitis quam possimus deserunt ipsa corrupti 
                  doloremque eaque voluptas sequi iste dignissimos temporibus
                   impedit incidunt officia alias, cupiditate, obcaecati illum 
                   commodi. Placeat perferendis quae et dolore! Aperiam placeat, 
                   asperiores voluptatum corporis dolore repudiandae reiciendis 
                   explicabo quae dignissimos possimus ipsam minus. Nulla distinc
                   tio doloremque repellat porro libero, beatae laborum. Aut, c
                   onsequatur quos doloribus corrupti et similique ipsa alias! H
                   ic tempora labore nemo quae non, porro, amet officia quod asp
                   ernatur explicabo numquam repellat consequuntur pariatur face
                   re suscipit deserunt beatae harum quam culpa possimus quaerat.
                   Ullam consectetur, deleniti libero aperiam reiciendis itaque d
                   istinctio beatae eos illo veniam quae dolore, veritatis sunt a
                   dipisci. Aut architecto assumenda non quibusdam aperiam, amet 
                   aliquid eveniet. Necessitatibus explicabo magni aut nobis at 
                   dignissimos, officiis aliquid dolor quis error perspiciatis dele
                   ctus eligendi perferendis. Eius iste necessitatibus beatae dolo
                   res maiores asperiores tenetur iure officia quia cum ipsa liber
                   o vero ducimus fugit, iusto blanditiis omnis provident! Placea
                   t voluptatibus architecto minus sint provident fugiat invento
                   re fuga, consectetur iste ex dolor corporis magnam hic, nesciu
                   nt ipsum ducimus neque distinctio porro nam quas magni! Provide
                   nt enim laboriosam ipsam quae modi ea eveniet vitae sed rep
                   udiandae dolor suscipit, optio, neque officia.
  `;
  constructor() { }

  ngOnInit(): void {
  }

}
