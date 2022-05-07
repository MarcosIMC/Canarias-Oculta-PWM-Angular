import { Component, OnInit } from '@angular/core';
import {Article} from "../../class/article";
import {ArticleService} from "../../services/article.service";
import {map} from "rxjs";

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  articles?:Article[];
  currentArticle?: Article;
  currentIndex = -1;

  constructor(private articleService:ArticleService) { }

  ngOnInit(): void {
    //this.retrieveArticles();
  }

  refreshList():void {
    this.currentArticle = undefined;
    this.currentIndex = -1;
    //this.retrieveArticles();
  }

  /*retrieveArticles(): void {
    this.articleService.getAll().snapshotChanges()
      .pipe(map(changes => changes.map(c => ({
        id: c.payload.doc.id,
        ...c.payload.doc.data()
      })))).subscribe(data => {this.articles = data;});
  }*/

}
