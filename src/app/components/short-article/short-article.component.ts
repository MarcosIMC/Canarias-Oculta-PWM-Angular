import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-short-article',
  templateUrl: './short-article.component.html',
  styleUrls: ['./short-article.component.css']
})
export class ShortArticleComponent implements OnInit {
  @Input() article:any;
  constructor() { }

  ngOnInit(): void {
  }

}
