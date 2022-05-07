import {Component, Input, OnInit} from '@angular/core';
import {Article} from "../../class/article";
import {ArticleService} from "../../services/article.service";
import {map} from "rxjs";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() island:any;
  @Input() article!:Article;

  constructor(private  articleService : ArticleService) { }

  ngOnInit(): void {
  }



}
