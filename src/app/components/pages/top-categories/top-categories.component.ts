import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-categories',
  templateUrl: './top-categories.component.html',
  styleUrls: ['./top-categories.component.scss']
})
export class TopCategoriesComponent implements OnInit {

  datas:any[]=[
    {img:"../../../../assets/images/top1.png", t1:"Mini LCW Chair", t2:"$56.00"},
    {img:"../../../../assets/images/top2.png", t1:"Mini LCW Chair", t2:"$56.00"},
    {img:"../../../../assets/images/top3.png", t1:"Mini LCW Chair", t2:"$56.00"},
    {img:"../../../../assets/images/top4.png", t1:"Mini LCW Chair", t2:"$56.00"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
