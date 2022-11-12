import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.scss']
})
export class DiscountComponent implements OnInit {

datas1:any[]=[
  {link:"../assets/images/sprite3.svg#icon-check", text:"Material expose like metals"},
  {link:"../assets/images/sprite3.svg#icon-check", text:"Clear lines and geomatric figures"},
 

]

datas2:any[]=[

  {link:"../assets/images/sprite3.svg#icon-check", text:"Simple neutral colours."},
  {link:"../assets/images/sprite3.svg#icon-check", text:"Material expose like metals"},

]
  constructor() { }

  ngOnInit(): void {
  }

}
