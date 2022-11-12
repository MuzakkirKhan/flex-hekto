import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss']
})
export class FeaturedComponent implements OnInit {

  datas:any[]=[
    {image:"../../assets/images/card1.png", t1:"Cantilever chair", t2:"Code - Y523201", t3:"42.00"},
    {image:"../../assets/images/card2.png", t1:"Cantilever chair", t2:"Code - Y523201", t3:"42.00"},
    {image:"../../assets/images/card3.png", t1:"Cantilever chair", t2:"Code - Y523201", t3:"42.00"},
    {image:"../../assets/images/card4.png", t1:"Cantilever chair", t2:"Code - Y523201", t3:"42.00"},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
