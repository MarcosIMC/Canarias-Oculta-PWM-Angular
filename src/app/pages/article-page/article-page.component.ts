import {Component, Input, OnInit, Output, SimpleChange} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {JsonService} from "../../services/json.service";
import {ArticleService} from "../../services/article.service";
import {Article} from "../../class/article";
import {Observable} from "rxjs";

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css'],
  providers: [JsonService]
})
export class ArticlePageComponent implements OnInit {
  //article?:any;
  article?:Article[];
  constructor(private route:ActivatedRoute, private _jsonService: JsonService, private  articleService: ArticleService) {  }

  ngOnInit(): void {
    const routeParams= this.route.snapshot.paramMap;
    const articleTitleFromRoute = String(
      routeParams.get('articleName')
    );

    /*this.article = this._jsonService.getArticles().find(
      article => article.title === articleTitleFromRoute
    );*/

    this.getArticle(articleTitleFromRoute);
  }

  async getArticle(title: String){

    this.article = await this.articleService.getArticleByName(title);

}

  getFavouriteState():boolean {
    return this._jsonService.isArticleFavourite(this.article);
  }

  changeFavouriteState() {
    this._jsonService.setArticleFavourite(null, this.article);
  }

}
