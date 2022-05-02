import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-carousel-article',
  templateUrl: './carousel-article.component.html',
  styleUrls: ['./carousel-article.component.css']
})
export class CarouselArticleComponent implements OnInit {
  @Input() article:any;
  constructor() { }

  ngOnInit(): void {
  }

}
