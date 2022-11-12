import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-we-offer',
  templateUrl: './we-offer.component.html',
  styleUrls: ['./we-offer.component.scss']
})
export class WeOfferComponent implements OnInit {
 
  datas:any[]=[
    {img:"../../../../assets/images/truck (1).png", t1:"24/7 Support", t2:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."},
    {img:"../../../../assets/images/dollar.png", t1:"24/7 Support", t2:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."},
    {img:"../../../../assets/images/badge.png", t1:"24/7 Support", t2:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."},
    {img:"../../../../assets/images/24.png", t1:"24/7 Support", t2:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
