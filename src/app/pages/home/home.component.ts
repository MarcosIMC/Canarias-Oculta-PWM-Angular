import { Component, OnInit } from '@angular/core';
import {JsonService} from "../../services/json.service";
import {ArticleService} from "../../services/article.service";
import {Article} from "../../class/article";
import {map} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[JsonService, ArticleService]
})
export class HomeComponent implements OnInit {
  importantArticle:any;
  sideArticle1:any;
  sideArticle2:any;
  //articles:any[];
  articles?: Article[];
  constructor(private _jsonService: JsonService, private articleService:ArticleService) {
    this.importantArticle=this._jsonService.getMainArticle();
    this.sideArticle1=this._jsonService.getSideArticle1();
    this.sideArticle2=this._jsonService.getSideArticle2();
    //this.articles=this._jsonService.getAdditionalArticles();
  }

  async getAll() {
    this.articles = await this.articleService.getAll();
  }

  ngOnInit(): void {
    //this.retrieveArticles();
    this.getAll();
  }

  /*retrieveArticles(): void {
    this.articleService.getAll().snapshotChanges()
      .pipe(map(changes => changes.map(c => ({
        id: c.payload.doc.id,
        ...c.payload.doc.data()
      })))).subscribe(data => {this.articles = data;});
  }*/
}
