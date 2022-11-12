import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.scss']
})
export class LatestComponent implements OnInit {

  datas:any[]=[
    {image:"../../assets/images/card5.png", t1:"Comfort Handy Craft", t2:"$42.00", t3:"42.00"},
    {image:"../../assets/images/card6.png", t1:"Comfort Handy Craft", t2:"$42.00", t3:"42.00"},
    {image:"../../assets/images/card7.png", t1:"Comfort Handy Craft", t2:"$42.00", t3:"42.00"},   
    {image:"../../assets/images/card8.png", t1:"Comfort Handy Craft", t2:"$42.00", t3:"42.00"},
    {image:"../../assets/images/card9.png", t1:"Comfort Handy Craft", t2:"$42.00", t3:"42.00"},
    {image:"../../assets/images/card10.png", t1:"Comfort Handy Craft", t2:"$42.00", t3:"42.00"}, 
    
  ];


  
  data2:any[]=[
    
    {image:"../../assets/images/card8.png", t1:"Comfort Handy Craft", t2:"$42.00", t3:"42.00"},
    {image:"../../assets/images/card9.png", t1:"Comfort Handy Craft", t2:"$42.00", t3:"42.00"},
    {image:"../../assets/images/card10.png", t1:"Comfort Handy Craft", t2:"$42.00", t3:"42.00"}, 
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
