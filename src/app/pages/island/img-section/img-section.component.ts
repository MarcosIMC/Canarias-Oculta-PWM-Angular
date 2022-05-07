import {Component, Input, OnInit} from '@angular/core';
import {ArticleService} from "../../../services/article.service";
import {Article} from "../../../class/article";
import {map} from "rxjs";

@Component({
  selector: 'app-img-section',
  templateUrl: './img-section.component.html',
  styleUrls: ['./img-section.component.css'],
  providers:[ArticleService]
})
export class ImgSectionComponent implements OnInit {
  @Input() island:any;
  @Input() article:any;
  articles?: Article[];
  constructor(private articleService:ArticleService) { }

  ngOnInit(): void {
  }


}
