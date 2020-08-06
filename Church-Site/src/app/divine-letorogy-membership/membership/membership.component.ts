import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css']
})
export class MembershipComponent implements OnInit {
  checkstatus=false;
  numberofiter=0;
  numarr:number[]=[];
  num=1;
  btncontenttwo:string='اضغط هنا لارسال البيانات';
  constructor() { }

  ngOnInit(): void {
  }
  changecontent(){
    return this.btncontenttwo='تم ارسال البيانات بنجاح';
  }
  checkifzero(inp){
    if(inp.value === 0){return true;}
    else{return false;}
  }
  getval(inp){
    this.numberofiter=inp.value;
  }
  checkstyle(){
    if(this.checkstatus==true){
      return 'd-block';
    }else{
      return 'd-none';
    }
  }
  createRange(number){
    var items: number[] = [];
    for(var i = 1; i <= number; i++){
       items.push(i);
    }
    return items;
  }
}
