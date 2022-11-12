import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class TrendingComponent implements OnInit {

rowOne:any[]=[
  {img:"../../../../assets/images/t1.png", t1:"Cantilever chair", t2:"$26.00", t3:"$42.00"},
  {img:"../../../../assets/images/t2.png", t1:"Cantilever chair", t2:"$26.00", t3:"$42.00"},
  {img:"../../../../assets/images/t3.png", t1:"Cantilever chair", t2:"$26.00", t3:"$42.00"},
  {img:"../../../../assets/images/t4.png", t1:"Cantilever chair", t2:"$26.00", t3:"$42.00"},
];


rowTwo:any[]=[
  {t1:"23% off in all products", t2:"Shop Now", img:"../../../../assets/images/t5.png"},
  {t1:"23% off in all products", t2:"Shop Now", img:"../../../../assets/images/t6.png"},
]

rowTwoo:any[]=[
  {img:"../../../../assets/images/t7.png", t1:"Executive Seat chair", t2:"$32.00"},
  {img:"../../../../assets/images/t8.png", t1:"Executive Seat chair", t2:"$32.00"},
  {img:"../../../../assets/images/t9.png", t1:"Executive Seat chair", t2:"$32.00"},
]

  constructor() { }

  ngOnInit(): void {
  }

}
