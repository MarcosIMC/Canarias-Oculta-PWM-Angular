import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {JsonService} from "../../services/json.service";

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css'],
  providers: [JsonService]
})
export class ArticlePageComponent implements OnInit {
  article: any;
  constructor(private route:ActivatedRoute, private _jsonService: JsonService) {  }

  ngOnInit(): void {
    const routeParams= this.route.snapshot.paramMap;
    const articleTitleFromRoute = String(
      routeParams.get('articleName')
    );
    this.article = this._jsonService.getArticles().find(
      article => article.title === articleTitleFromRoute
    );
  }

  getFavouriteState():boolean {
    return this._jsonService.isArticleFavourite(this);
  }

  changeFavouriteState() {
    this._jsonService.setArticleFavourite(null, this);
  }

}
