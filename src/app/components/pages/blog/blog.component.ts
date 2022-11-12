import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  data:any[]=[
    {img:"../../../../assets/images/blog1.png", t1:"Top esssential Trends in 2021",
     t2:"More off this less hello samlande lied much over tightly circa horse taped mightly",
    t3:"Read More"},
    {img:"../../../../assets/images/blog2.png", t1:"Top esssential Trends in 2021",
    t2:"More off this less hello samlande lied much over tightly circa horse taped mightly",
   t3:"Read More"},
   {img:"../../../../assets/images/blog3.png", t1:"Top esssential Trends in 2021",
   t2:"More off this less hello samlande lied much over tightly circa horse taped mightly",
  t3:"Read More"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
